import React from "react";
import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'

const Me = (props) => {
    const [open, setOpen] = React.useState(false)
    return (
        <div>
            <div className="App-header">
            <h1 className="welcome-text">
                My Experience
            </h1>
        </div>
        <div className="intro">
        <>
        <button
          type='button'
          className="btn btn-outline-primary"
          onClick={() => {
            setOpen(!open)
          }}
        >
          {open ? 'Close' : 'Technical Skills'}
        </button>
        <Collapsible open={open}>
          <ul>
              <li>
                AJAX
              </li>
              <li>
                  Django
              </li>
              <li>
                  EJS
              </li>
              <li>
                  Express.js
              </li>
              <li>
                  HTML & CSS 
              </li>
              <li>
                  JavaScript
              </li>
              <li>
                  jQuery
              </li>
              <li>
                  JSON
              </li>
              <li>
                  JWT
              </li>
              <li>
                  MongoDB
              </li>
              <li>
                  Mongoose
              </li>
              <li>
                  MVP Frameworks
              </li>
              <li>
                  Node.js 
              </li>
              <li>
                  Python
              </li>
              <li>
                  React 
              </li>
              <li>
                  RESTful APIs
              </li>
              <li>
                  PostgreSQL
              </li>
          </ul>
        </Collapsible>
        
      </>
            </div>
         
        </div>
    );
};

export default Me;