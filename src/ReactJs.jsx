import React from 'react'
import noImage from "./assets/no.png";

const ReactJs = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

  return (
    <div className="react-modal-overlay" onClick={onClose} tabIndex="-1" >
        <div className='reactBlock' onClick={(e) => e.stopPropagation()} >
            <h1>React</h1>
            <img onClick={onClose} className="exit" src={noImage} alt="exit" />
            <p>React Js</p>
            <p>
                Component-Based Architecture: React applications are built using components, which are
                 reusable and independent pieces of code that define a part of the user interface.
                JSX (JavaScript XML): JSX is a syntax extension for JavaScript that allows you to write HTML 
                directly within React. It makes the code easier to understand and debug.
                Virtual DOM: React uses a virtual DOM to improve performance. When the state of an object changes, 
            </p>
            <div className="more">
          <span>More..</span>{" "}
          <a href="https://www.w3schools.com/react/default.asp">w3school</a>
        </div>
        </div>
       
    </div>

  )
}

export default ReactJs