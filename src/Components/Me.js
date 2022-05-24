import React from "react";
import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'
import ParticlesBg from 'particles-bg'
import MichaelStarkResume from "../images/MichaelStarkResume.jpg"
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import Resume from "../images/Resume.jpg"

const Me = (props) => {
    const [open, setOpen] = React.useState(false)
    return (
        <>
        <div>
            <div className="App-header">
            <h1 className="welcome-text">
                My Experience
            </h1>
        </div>
        <div className="tech">
       
        <>
        <button
          type='button'
          className="btn btn-outline-secondary"
          onClick={() => {
            setOpen(!open)
          }}
        >
          {open ? 'Close' : 'Resume'}
        </button>
        <Collapsible open={open}>
        <div class="container">
                    <div class="row">
                        <div class="card text-white mb-3">
                            <div class="card-body">
                                 <p class="card-text">
        <img className="resume" src={MichaelStarkResume} alt="selfie"/>
        </p>
        </div>
        </div>
        </div>
        </div>
        </Collapsible>
      </>
        {/* <Popup trigger={<button type='button'
          className="btn btn-outline-secondary"> Resume</button>} position="left center">
            <div><img src={Resume} alt="Resume"/></div>
        </Popup> */}
            </div>
         
        </div>
        <ParticlesBg type="cobweb" bg={true} />
        </>
    );
};

export default Me;