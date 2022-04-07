import React from "react";

import './Contact.css';

export const Contact = () => {
    return (
        <div id="Contact">
            <h1 className="contactTitle">Contact me!</h1>
            <div className="contactMeCtn">
                <div className="contactEmail">
                    <img src="email.png" alt="emailIcon"/>
                    <p>alex.durango2303@gmail.com</p>

                </div>
                <div className="contactPhone">
                    <img src="phone.png" alt="phoneIcon"/>
                    <p>+57 313 531 0417</p>
                </div>
                <div className="contactAddress">
                    <img src="address.png" alt="addressIcon"/>
                    <p>Street 4A #84 - 67</p>
                    <p>Meléndez. Cali, Valle del Cauca. Colombia</p>
                </div>
            </div>
        </div>
    );
}