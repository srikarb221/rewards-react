import React, { useState, useEffect } from "react";
import { callRewardsApi } from '../../utils/utils';
import ErrorToaster from "../error/toaster";
import Loading from "../loading/loading";

const SummaryDetail = ({ customerId, month }) => {

    const [detailData, setDetailData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (!detailData) {

            async function getDetailData() {
                const urlpath = `${customerId}/${month}`;
                await callRewardsApi(urlpath)
                    .then((response) => response.json())
                    .then(data => {
                        if (data && data.status) {
                            setErrorMessage(data.error);
                        } else {
                            setDetailData(data);
                        }
                    })
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
            getDetailData();
        }

        return () => {
            setDetailData(null);
        }
    }, [])


    return (
        loading ? <Loading /> :
            <>
                {errorMessage.length > 0 && <ErrorToaster message={errorMessage} />}
                <table className="table table-borderless table-hover"
                    style={{ maxWidth: '70%', margin: '0px auto' }}>
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col" className='text-center'>Rewards</th>
                        </tr>
                    </thead>
                    <tbody>
                        {detailData && (detailData.detailRewards || []).map(detail =>
                        (
                            <tr key={detail.date}>
                                <td>{detail.date}</td>
                                <td>{detail.amount}</td>
                                <td className='text-center'>{detail.rewards}</td>
                            </tr>
                        )
                        )}
                    </tbody>
                    <tfoot className='pt-5'>
                        <tr>
                            <td className='fw-bold'>Total</td>
                            <td>{detailData && detailData.totalAmount}</td>
                            <td className='text-center'>{detailData && detailData.totalRewards}</td>
                        </tr>
                    </tfoot>
                </table>
            </>
    )
}

export default SummaryDetail;