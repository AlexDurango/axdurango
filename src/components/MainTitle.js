import React from "react";
import './MainTitle.css'

export const MainTitle = () => {
    return (
        <div className="mainTitle" id="Home">
            <div className="mainTitleCtn">
                <div className="brandName">

                    <h1><img src="lessThan.png" alt="lessThan Icon" /> Alex</h1>
                    <h2>Durango <img src="greaterThan.png" alt="greaterThan Icon" /></h2>
                    <h4>Software Developer</h4>

                </div>
                <div className="handDetectorCtn">
                    <div className="handDetectorImg" >
                        <img src="hands.gif" alt="Hands detector" />
                    </div>
                    <div className="handDetectorDesc">
                        <p>AI detects my hands with Python!</p>
                    </div>
                    {/* <img src="hands.gif" alt="Hands detector" /> */}
                </div>
            </div>
        </div>
    );
}