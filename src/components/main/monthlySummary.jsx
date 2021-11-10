import React, { useState } from "react";
import SummaryDetail from "./summaryDetail";
import { getMonthName } from '../../utils/utils';


const MonthlySummary = ({ summary }) => {
    const { customerId, customerName, month, amount, rewards } = summary;
    const [detailData, setDetailData] = useState([]);
    const [showDetail, setShowDetail] = useState(false);

    const handleShowDetail = (event) => {
        console.log(event);
        setShowDetail(!showDetail);
        const idarr = event.target.parentElement.id.split("_");
        if (idarr.length > 1) {
            const customerId = idarr[0];
            const month = idarr[1];
            setDetailData({ customerId, month });
        }

    }
    return (
        <>
            <tr onClick={handleShowDetail} id={`${customerId}_${month}`}>
                <td>{customerId}</td>
                <td>{customerName}</td>
                <td>{getMonthName(month)}</td>
                <td>{amount}</td>
                <td className='text-center'>{rewards}</td>
            </tr>
            <tr className='total-row'>
                <td colSpan={5}>
                    {showDetail && <SummaryDetail {...detailData} />}
                </td>
            </tr>
        </>
    )
}

export default MonthlySummary;