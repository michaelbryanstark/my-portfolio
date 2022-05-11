import React from "react";
import ParticlesBg from 'particles-bg'
import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'
import codeshare from "../images/codeshare.jpg"
import bdsqs from "../images/bdsqs.jpg"
import pirate from "../images/pirate.png"


function Projects() {
    const [open, setOpen] = React.useState(false)
    return(
        <>
        <div>
                <div className="App-header">
                    <h1 className="welcome-text">
                         Projects
                    </h1>
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
          {open ? 'Close' : 'Apps and Websites'}
        </button>
        <Collapsible open={open}>
                
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card text-center h-100">
                        <div className="image">
                            
                            <img className="bdsqs" src={bdsqs} alt="bdsqs"/>
                        </div>
                            <div className="card-body">
                                <h3 className="card-title">BDS Quality Services</h3>
                                <p className="card-text">Built using the React.js, JavaScript, and HTML/CSS, BDS Quality Services is a company that provides quality assurance training and compliance.</p>
                            </div>
                            <div>
                                <button type='button' className="btn btn-outline-secondary"onClick={()=> window.open("https://bdsqs.net", "_blank")}>Visit BDS Quality Services!</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-center h-100">
                            <div className="image">
                               
                                <img className="share" src={codeshare} alt="codeshare"/>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">CodeShare</h3>
                                <p className="card-text">Full stack React app built for developers to share code. Features full CRUD built using JavaScript, Node.js, CSS, MongoDB/Mongoose, JWT-based Authentication.</p>
                            </div>
                            <div>
                            <button type='button' className="btn btn-outline-secondary"onClick={()=> window.open("https://codeshare-app3.herokuapp.com/login", "_blank")}>Visit CodeShare!</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-center h-100">
                            <div className="image">
                                <img className="dan" src={pirate} alt="new"/>
                                
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">The Penalty Box</h3>
                                <p className="card-text">Personal Blog with full CRUD built using the Django Framework and Python. Users can sign up leave comments on blog posts.</p>
                            </div>
                            <div>
                            <button type='button' className="btn btn-outline-secondary"onClick={()=> window.open("https://penalty-box.herokuapp.com/", "_blank")}>Visit The Penalty Box!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Collapsible>
        </>
        </div>
        </div>
        <ParticlesBg type="cobweb" bg={true} />
        </>
        
    )
}

export default Projects;