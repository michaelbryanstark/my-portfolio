import React from "react";
import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'
import ParticlesBg from 'particles-bg'
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
          {open ? 'Close' : 'Technical Skills'}
        </button>
        <Collapsible open={open}>
            <table>
                <tr>
                    <td>
                        AJAX
                    </td>
                    <td>
                        Django
                    </td>
                     <td>
                        EJS
                    </td>
                </tr>
                <tr>
                    <td>
                        Express.js
                    </td>
                    <td>
                        HTML & CSS
                    </td>
                    <td>
                        JavaScript
                    </td>
                </tr>
                <tr>
                    <td>
                        jQuery 
                    </td>
                    <td>
                        JSON
                    </td>
                    <td>
                        JWT
                    </td>
                </tr>
                <tr>
                    <td>
                        MongoDB
                    </td>
                    <td>
                        Mongoose
                    </td>
                    <td>
                        MVP Frameworks
                    </td>
                </tr>
                <tr>
                    <td>
                        Node.js 
                    </td>
                    <td>
                        Python
                    </td>
                    <td>
                        PostgreSQL
                    </td>
                </tr>
                <tr>
                    <td>
                        React 
                    </td>
                    <td>
                        RESTful APIs 
                    </td>
                    <td>
                        TypeScript
                    </td>
                </tr>
            </table>
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