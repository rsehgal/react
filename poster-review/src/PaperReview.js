import React, { useEffect, useState } from 'react';
import DataTablePaperReview from './DataTablePaperReview';
import { useLocation } from 'react-router-dom';
import RefereeConfirmation from './RefereeConfirmation';
import DeclineMessage from './DeclineMessage';


const PaperReview = (props) => {

    const [loading, setLoading] = useState(false);

    const [refConfirmationStatus, setRefConfirmationStatus] = useState('');
    const [refereeName, setRefereeName] = useState('');

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedValue = queryParams.get('refereeName');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setRefereeName(selectedValue);

            try {
                const response = await fetch(
                    'https://sympnp.org/phpNode/getRefereeConfirmationStatus.php?refereeName=' + selectedValue
                );
                const jsonData = await response.json();
                //console.log(jsonData[0].status);
                const refConfStatus=jsonData[0].status;
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
    }, [refConfirmationStatus]); // runs only once after initial render

    return (<div>
        {refConfirmationStatus==="accepted" && <DataTablePaperReview />}
        {refConfirmationStatus==="declined" && <DeclineMessage />}
        {refConfirmationStatus==="allotted" && <RefereeConfirmation onSubmit={setRefConfirmationStatus}/>}
    </div>);

}

export default PaperReview;