import React, { useEffect, useRef, useState } from 'react';
import DataTablePaperReview from './DataTablePaperReview';
import { useLocation } from 'react-router-dom';
import RefereeConfirmation from './RefereeConfirmation';
import DeclineMessage from './DeclineMessage';
import RefereeInstructions from './RefereeInstructions';
import DeclineMessage2 from './DeclineMessage2';
import ProceedButton from './ProceedButton';
import RefereeConfirmation2 from './RefereeConfirmation2';


const PaperReview = (props) => {

    const [loading, setLoading] = useState(false);

    const [refConfirmationStatus, setRefConfirmationStatus] = useState('');
    const [refereeName, setRefereeName] = useState('');
    const [proceed, setProceed] = useState('');
    const [fullname, setFullname] = useState('');
    const [showInstructions, setShowInstructions] = useState(true);

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
                //console.log(jsonData[0].uname);
                /*
                jsonData.map((item,value)=>{
                console.log(item.uname);
                });
                */
                setRefConfirmationStatus(refConfStatus);
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


    /*
    return (<div>
        <RefereeInstructions />
        <ProceedButton onProceed={setProceed} />
        {refConfirmationStatus === "accepted" && proceed && <DataTablePaperReview fullname={fullname} refereeName={refereeName} />}
        
       
        {refConfirmationStatus === "declined" && proceed && (
            <div ref={bottomRef}>
                <DeclineMessage2 />
            </div>
        )}

       
        {refConfirmationStatus === "allotted" && proceed && (
            <div ref={bottomRef}>
                <RefereeConfirmation2
                    onSubmit={setRefConfirmationStatus}
                    refereeName={refereeName}
                />
            </div>
        )}
    </div>);
    */
   /*
return (
  <div>
    
    {showInstructions && <RefereeInstructions />}

    {!proceed && <RefereeInstructions />}  
        {!proceed && <ProceedButton onProceed={() => setProceed(true)} />} 

    {refConfirmationStatus === "accepted" && proceed && <DataTablePaperReview fullname={fullname} refereeName={refereeName}/>}
    {refConfirmationStatus === "declined" && proceed && <DeclineMessage2 />}
    {refConfirmationStatus === "allotted" && proceed && (
      <RefereeConfirmation2 
        onSubmit={setRefConfirmationStatus} 
        refereeName={refereeName} 
      />
    )}
  </div>
);
*/
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

      {/* Load child components based on status */}
      {refConfirmationStatus === "accepted" && proceed && <DataTablePaperReview fullname={fullname} refereeName={refereeName}/>}
      {refConfirmationStatus === "declined" && proceed && <DeclineMessage2 fullname={fullname}/>}
      {refConfirmationStatus === "allotted" && proceed && (
        <RefereeConfirmation2
          onSubmit={setRefConfirmationStatus}
          refereeName={refereeName}
          fullname={fullname}
        />
      )}
    </div>
  );

}

export default PaperReview;