import React, { useEffect, useState } from "react";

const ErrorToaster = ({ message }) => {

    const [showToaster, setShowToaster] = useState(false);

    useEffect(() => {
        message && message.length > 0 ? setShowToaster(true) : setShowToaster(false);
    });

    const baseClass = "toast position-fixed bottom-0 end-0 " +
        " me-5 mb-5 show text-white bg-danger border-0 show";

    return (
        showToaster &&
        <div className={baseClass}>
            <div className="toast-body">
                {message}
            </div>
        </div>
    )
}

export default ErrorToaster;