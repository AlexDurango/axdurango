import React from "react";
import './Navbar.css'

// Fixed lateral navbar
export const Navbar = () => {

    const sections = ['Home', 'About', 'Projects', 'Contact']

    return (
        <div className="sidebar">
            <a href="/">
                <img src="faviconax.png" alt="BrandLogo" className="brandIcon" />
            </a>
            <ul>
                {sections.map((section, i) =>
                    <li key={i}>
                        <a href={'#' + section}>
                            {section}
                        </a>
                    </li>
                )}
            </ul>
            <div className="socialMedia">
                <a href="https://github.com/AlexDurango" target="_blank" rel="noreferrer noopener">
                    <img src="githubIcon.png" alt="githubicon" className="socialMediaIcon" />

                </a>
                <a href="https://www.linkedin.com/in/alex-santiago-durango-garcia-941b30201" target="_blank" rel="noreferrer noopener">
                    <img src="linkedinIcon.png" alt="linkedinIcon" className="socialMediaIcon" />
                </a>
            </div>


        </div>
    );
}