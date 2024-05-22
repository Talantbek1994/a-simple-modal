import React from 'react'
import noImage from "./assets/no.png";

const NodeJs = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

  return (
    <div className="node-modal-overlay" onClick={onClose} tabIndex="-1" >
        <div className='nodeBlock' onClick={(e) => e.stopPropagation()} >
            <h1>NodeJs</h1>
            <img onClick={onClose} className="exit" src={noImage} alt="exit" />
            <p>Node Js</p>
            <p>
            What is Node.js?
            Runtime Environment: Node.js is built on Chrome's V8 JavaScript engine, making it fast and efficient for server-side applications.
                Non-blocking I/O: Node.js uses an event-driven, non-blocking I/O model, which makes it ideal for building scalable network applications.
            Single-threaded: Despite being single-threaded, Node.js can handle many connections concurrently thanks to its asynchronous nature.
            Core Features
            </p>
            <div className="more">
          <span>More..</span>{" "}
          <a href="https://www.w3schools.com/react/default.asp">w3school</a>
        </div>
        </div>
       
    </div>

  )
}

export default NodeJs