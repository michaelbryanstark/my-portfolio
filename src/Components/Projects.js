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
                        <div className="card text-center h-100">
                        <div className="image">
                            <img src="https://live.staticflickr.com/65535/51900488487_1b68a201c4_w.jpg" alt="new" href="https://bdsqs.net" target='_blank' rel="noreferrer"/>
                        </div>
                            <div className="card-body">
                                <h3 className="card-title">BDS Quality Services</h3>
                                <p className="card-text">Built using the Django framework and Python. BDS Quality Services is a company that provides quality assurance training and compliance.</p>
                            </div>
                            <div className="card-footer">
                                <a href="https://bdsqs.net" target='_blank' rel="noreferrer" className="text-muted">Visit BDS Quality Services!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-center h-100">
                            <div className="image">
                                <img className="share" src="https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562?k=20&m=1075599562&s=612x612&w=0&h=cDFY2kKyhFzSNNlDQsaxoekIW0v7iyaMBkxp11Fz33U=" alt="new" href="www.google.com"/>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">CodeShare</h3>
                                <p className="card-text">Full stack React app built for developers to share code. Features full CRUD built using JavaScript, Node.js, CSS, MongoDB/Mongoose, JWT-based Authentication.</p>
                            </div>
                            <div className="card-footer">
                            <a href="https://codeshare-app3.herokuapp.com/login" target='_blank' rel="noreferrer" className="text-muted">Visit CodeShare!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-center h-100">
                            <div className="image">
                                <img className="dan" src="http://i.imgur.com/ALIGMnI.png" alt="new"/>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">The Penalty Box</h3>
                                <p className="card-text">Personal Blog with full CRUD built using the Django Framework and Python. Users can sign up leave comments on blog posts.</p>
                            </div>
                            <div className="card-footer">
                            <a href="https://penalty-box.herokuapp.com/" target='_blank' rel="noreferrer" className="text-muted">Visit The Penalty Box!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default Projects;