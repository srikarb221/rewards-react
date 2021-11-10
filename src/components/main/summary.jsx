import React, { useState, useEffect } from "react";
import MonthlySummary from "./monthlySummary";
import { callRewardsApi } from '../../utils/utils';
import Loading from "../loading/loading";
import ErrorToaster from "../error/toaster";


const Summary = () => {
    const [summaryData, setSummaryData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (!summaryData) {

            async function getSummaryData() {
                await callRewardsApi()
                    .then((response) => response.json())
                    .then(data => setSummaryData(data))
                    .catch((error) => {
                        let err = error;
                        if (err.message) {
                            setErrorMessage(error)
                        } else {
                            setErrorMessage('Api Call Failed.')
                        }
                    })
                    .finally(setLoading(false));
            }

            getSummaryData();

        }

        return () => {
            setSummaryData(null);
        }
    }, [])

    return (
        loading ? <Loading /> :
            <>
                {errorMessage.length > 0 && <ErrorToaster message={errorMessage} />}
                <div className='container'>
                    <h2 className='pb-5'>Customer Rewards Summary</h2>
                    <table className="table table-borderless table-hover mb-5">
                        <thead>
                            <tr>
                                <th scope="col">Customer Id</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Month</th>
                                <th scope="col">Amount</th>
                                <th scope="col" className='text-center'>Rewards</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(summaryData || []).map((summary) => (
                                <MonthlySummary key={`${summary.customerId}_${summary.month}`} summary={summary} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
    )
}

export default Summary;