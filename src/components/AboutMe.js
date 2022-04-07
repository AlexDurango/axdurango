import React from "react";
import './AboutMe.css';

export const AboutMe = () => {
    return (
        <div>
            <div className="card rounded shadow" id="About">
                <div className="container">
                    <div className="card-body ms-5">
                        <h1 className="aboutMeTitle">
                            So this is me! <img src="paperPlane.png" alt="paperPlane" className="paperPlane"/>
                        </h1>
                        <p className="card-text">
                            I'm just a passionate programer that
                            love creating stuff!
                        </p>
                        <p>
                            I enjoy creating web apps using tools like
                            <b> Javascript</b>,<b> NodeJS</b>,<b> ReactJS</b>,
                            <b> MySQL</b> and<b> Python</b>.
                            Also, I use other tecnologies enfocated to the
                            Big Data field, such as<b> Pandas</b> and
                            <b> Matplotlib</b>.
                            I'm that weird creature we often call
                            'Full stack developer' or something like that.

                            What I love most about coding is the infinte
                            and unknown topics it has,
                            so there's always something new to learn!
                        </p>
                        <p>
                            Programing aside, I'm the type of guy
                            that appreciate videogames and movies. I listen to
                            a wide variety of musical genres, from rock to jazz
                            and everything in between.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}