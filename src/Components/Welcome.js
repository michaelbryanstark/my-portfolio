import React from "react";
import "../App.css";
import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'
import ParticlesBg from 'particles-bg'
import selfie from "../images/selfie.jpg"


const Welcome = (props) => {
    const [open, setOpen] = React.useState(false)

    return (
        <>
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
        <>
        <button
          type='button'
          className="btn btn-outline-secondary"
          onClick={() => {
            setOpen(!open)
          }}
        >
          {open ? 'Close' : 'Who am I?'}
        </button>
        <Collapsible open={open}>
            <img className="dan" src={selfie} alt="selfie"/>
                <div class="container">
                    <div class="row">
                        <div class="card text-black mb-3">
                            <div class="card-body">
                                 <p class="card-text">
                                    I am a Software Engineer with a background in Physics and Operations Management. 
                                    Problem solving has always been my focus and drive to improve how things operate 
                                    and introduce logical systems. Throughout my career in Web Development, I have 
                                    learned how to oversee multiple tasks and create new solutions to streamline 
                                    workflows and get the job done. Using my skills in Javascript, Python, HTML, 
                                    and CSS, I am able to create simpler, more coherent software to meet the needs 
                                    of an ever-changing environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>  
        </Collapsible>
      </>
        </div>
        </div>
        <ParticlesBg color="#000000" num={50} type="cobweb" bg={true} />
        </>
    );
};

export default Welcome;
