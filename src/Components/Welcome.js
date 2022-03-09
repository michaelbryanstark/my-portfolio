import React from "react";
import "../App.css";



const Welcome = (props) => {
    return (
        <div>
            <div className="App-header">
            <h1 className="welcome-text">
                Michael Bryan Stark
            </h1>
            <h4>
                Full Stack Software Engineer
            </h4>
        </div>
        <div className="intro">
            <h2>
            I am a Software Engineer with a background in Physics and Operations Management. Problem solving has always been my focus and drive to improve how things operate and introduce logical systems. Throughout my career managing an art auction house, I have learned how to oversee multiple tasks and create new solutions to streamline workflows and get the job done. Using my skills in Javascript, Python, HTML, and CSS, I am able to create simpler, more coherent software to meet the needs of an ever-changing environment.
            </h2>
            </div>
        </div>
    );
};
export default Welcome;