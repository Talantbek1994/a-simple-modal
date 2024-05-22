import React from 'react'
import noImage from "./assets/no.png";

const JavaScript = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

  return (
    <div className="js-modal-overlay" onClick={onClose} tabIndex="-1" >
        <div className="jsBlock" onClick={(e) => e.stopPropagation()} >
            <h1>Javascript</h1>
            <img onClick={onClose} className="exit" src={noImage} alt="exit" />
            <p>Web Development: JavaScript is primarily used to create interactive and dynamic web pages. 
                It can manipulate HTML and CSS to update the content and style of web pages without requiring a page reload.
               Server-Side Development: Using environments like Node.js, JavaScript can also be used to write 
               server-side code, allowing developers to use the same language on both the client and server sides.
               </p>
               <div className="more">
          <span>More..</span>{" "}
          <a href="https://www.w3schools.com/js/default.asp">w3school</a>
          </div>
        </div>
    </div>
  )
}

export default JavaScript