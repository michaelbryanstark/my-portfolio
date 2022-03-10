import React from 'react'
import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'
import ParticlesBg from 'particles-bg'


const Contact = (props) => {
    const [open, setOpen] = React.useState(false)
    return (
        <>
        <div>
            <div className="App-header">
            <h1 className="welcome-text">
                Contact
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
          {open ? 'Close' : 'Contact'}
        </button>
        <Collapsible open={open}>
            Contact form
        </Collapsible>
      </>
            </div>
         
        </div>
        <ParticlesBg type="cobweb" bg={true} />
        </>
    );
};

export default Contact;