import React from "react";


function Projects() {
    return(
        <div>
                <div className="App-header">
                    <h1 className="welcome-text">
                         Projects
                    </h1>
                </div>
                <div className="card-header">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                        <img src="https://live.staticflickr.com/65535/51900488487_1b68a201c4_w.jpg" alt="new"/>
                            <div className="card-body">
                                <h5 className="card-title">BDS Quality Services</h5>
                                <p className="card-text">Built using the Django framework and Python. BDS Quality Services is a company that provides quality assurance training and compliance.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Copyright BDSQS</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src="https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562?k=20&m=1075599562&s=612x612&w=0&h=cDFY2kKyhFzSNNlDQsaxoekIW0v7iyaMBkxp11Fz33U=" alt="new"/>
                            <div className="card-body">
                                <h5 className="card-title">CodeShare</h5>
                                <p className="card-text">Social media app built for developers to share code/memes. Full stack React app with full CRUD built using JavaScript, Node.js, CSS, MongoDB/Mongoose, JWT-based Authentication.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Copyright Michael Stark</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src="http://i.imgur.com/ALIGMnI.png" alt="new"/>
                            <div className="card-body">
                                <h5 className="card-title">The Penalty Box</h5>
                                <p className="card-text">Personal Blog with full CRUD built using the Django Framework and Python. Users can sign up leave comments on blog posts.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Copyright Michael Stark</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default Projects;