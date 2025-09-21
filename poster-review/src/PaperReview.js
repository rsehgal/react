import React, { useEffect, useRef, useState } from 'react';
import DataTablePaperReview from './DataTablePaperReview';
import { useLocation } from 'react-router-dom';
import RefereeConfirmation from './RefereeConfirmation';
import DeclineMessage from './DeclineMessage';
import RefereeInstructions from './RefereeInstructions';
import DeclineMessage2 from './DeclineMessage2';
import ProceedButton from './ProceedButton';
import RefereeConfirmation2 from './RefereeConfirmation2';
import LockButton from './LockButton';
import Message from './Message';


const PaperReview = (props) => {

    const [loading, setLoading] = useState(false);

    const [refConfirmationStatus, setRefConfirmationStatus] = useState('');
    const [refereeName, setRefereeName] = useState('');
    const [proceed, setProceed] = useState('');
    const [fullname, setFullname] = useState('');
    const [showInstructions, setShowInstructions] = useState(true);
    const [lock, setLock] = useState(false);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    //const selectedValue = queryParams.get('refereeName');
    const hashValue = queryParams.get('hash');
    const bottomRef = useRef(null); // 👈 ref to scroll target

    let refName = "";
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);


            try {
                const responseRef = await fetch(
                    'https://sympnp.org/phpNode/getRefereeDetails.php?hash=' + hashValue
                );
                const jsonDataRef = await responseRef.json();
                //console.log(jsonData[0].status);
                refName = jsonDataRef[0].uname;
                //alert("Welcome "+refName);
                setRefereeName(refName);
                setFullname(jsonDataRef[0].refereeName);
                console.log("Referee Name: " + refName);

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }

            try {
                const response = await fetch(
                    'https://sympnp.org/phpNode/getRefereeConfirmationStatus.php?refereeName=' + refName
                );
                const jsonData = await response.json();
                //console.log(jsonData[0].status);
                const refConfStatus = jsonData[0].status;
                const refLockStatus = jsonData[0].screeningStatus;

                console.log(jsonData[0].screeningStatus);
                /*
                jsonData.map((item,value)=>{
                console.log(item.uname);
                });
                */
                setRefConfirmationStatus(refConfStatus);
                setLock(refLockStatus === "1" ? true : false);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData(); // call the async function
    }, [hashValue]); // runs only once after initial render

   
    // 👇 Scroll down whenever proceed changes to true
    useEffect(() => {
        if (proceed && bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [proceed, refConfirmationStatus]);


 return (
    <div>
      {/* Instructions visible initially or when toggled back */}
      {showInstructions && <RefereeInstructions />}

      {/* Proceed button only if not yet proceeded */}
      {!proceed && <ProceedButton onProceed={() => { setProceed(true); setShowInstructions(false); }} />}

      {/* After proceeding, show toggle button */}
      {proceed && (
        <div className="text-center my-3">
          <button
            className="btn btn-outline-danger"
            onClick={() => setShowInstructions(!showInstructions)}
          >
            {showInstructions ? "Hide Instructions" : "Show Instructions"}
          </button>
        </div>
      )}

      {proceed && !lock && <Message text="You can modify your remarks and marks any time before finally locking it."
       variant='info' />}
      {proceed && lock && <Message text="Your decision are already locked." variant='danger' />}

      {/* Load child components based on status */}
      {refConfirmationStatus === "accepted" && proceed && <DataTablePaperReview fullname={fullname} refereeName={refereeName} locked={lock}/>}
      {refConfirmationStatus === "declined" && proceed && <DeclineMessage2 fullname={fullname}/>}
      {refConfirmationStatus === "allotted" && proceed && (
        <RefereeConfirmation2
          onSubmit={setRefConfirmationStatus}
          refereeName={refereeName}
          fullname={fullname}
        />
      )}
      <div className='text-center my-3'>
      {proceed && !lock && <LockButton onLock={setLock} refereeName={refereeName}/>}
      
      </div>
    </div>
  );

}

export default PaperReview;