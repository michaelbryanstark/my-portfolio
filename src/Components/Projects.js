import React from "react";
import ParticlesBg from 'particles-bg'
import codeshare from "../images/codeshare.jpg"
import bdsqs from "../images/bdsqs.jpg"
import pirate from "../images/pirate.png"


function Projects() {
    return(
        <>
        <div>
                <div className="App-header">
                    <h1 className="welcome-text">
                         Projects
                    </h1>
                </div>
                <div className="card-header">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card text-center h-100">
                        <div className="image">
                            
                            <img src={bdsqs} alt="bdsqs"/>
                        </div>
                            <div className="card-body">
                                <h3 className="card-title">BDS Quality Services</h3>
                                <p className="card-text">Built using the Django framework and Python. BDS Quality Services is a company that provides quality assurance training and compliance.</p>
                            </div>
                            <div className="card-footer">
                                <a href="https://bdsqs.net" target='_blank' rel="noopener noreferrer" className="text-muted">Visit BDS Quality Services!</a>
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
                            <div className="card-footer">
                            <a href="https://codeshare-app3.herokuapp.com/login" target='_blank' rel="noopener noreferrer" className="text-muted">Visit CodeShare!</a>
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
                            <div className="card-footer">
                            <a href="https://penalty-box.herokuapp.com/" target='_blank' rel="noopener noreferrer" className="text-muted">Visit The Penalty Box!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ParticlesBg type="cobweb" bg={true} />
        </>
        
    )
}

export default Projects;