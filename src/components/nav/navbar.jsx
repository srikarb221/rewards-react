import React from "react";
import { Link } from "@reach/router";


const Navbar = () => {
    return (
        <header>
            <nav className={"navbar navbar-expand-lg shadow-lg fixed-top"}
                style={{ backgroundColor: "currentColor" }}>
                <div className="container">
                    <div className="navbar-brand fs-4">
                        <Link to="/" className='text-decoration-none'
                            style={{ color: "whitesmoke" }}>
                            Rewards App
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;