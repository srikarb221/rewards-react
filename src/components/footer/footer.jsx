import React from "react";

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'darkslategray',
            height: '5rem',
            width: '100%',
            display: 'flex'
        }}>
            <p style={{
                margin: 'auto',
                color: 'whitesmoke'
            }}>&copy;{new Date().getFullYear()} Rewards App. All rights reserved</p>
        </footer>
    )
}

export default Footer;