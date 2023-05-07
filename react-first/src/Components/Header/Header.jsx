import React from "react";
import "./header.css"
const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="header-row">
                    <h2>SB UI KIT PRO</h2>

                    <nav>
                        <ul>
                            <li className="header-li">Home</li>
                            <li className="header-li">Landings</li>
                            <li className="header-li">Pages</li>
                            <li className="header-li">Documentation</li>
                        </ul>
                    </nav>

                    <button className="buy-btn">Buy Now</button>
                </div>
            </div>
        </header>

    )
}

export default Header;