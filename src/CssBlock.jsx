import React from 'react'
import noImage from "./assets/no.png";

const CssBlock = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

  return (
    <div className="css-modal-overlay" onClick={onClose} tabIndex="-1" >
        <div className='cssBlock' onClick={(e) => e.stopPropagation()} >
            <h1>CSS</h1>
            <img onClick={onClose} className="exit" src={noImage} alt="exit" />
            <p>CSS - CASCADING STYLE SHEETS</p>
            <p>
                CSS (Cascading Style Sheets) is a style sheet language used 
                for describing the presentation of a document written in HTML
                 or XML (including XML dialects such as SVG, MathML, etc.). It
                  allows web developers to control the layout, colors, fonts, 
                  and other visual aspects of their web pages.
            </p>
            <div className="more">
          <span>More..</span>{" "}
          <a href="https://www.w3schools.com/css/default.asp">w3school</a>
        </div>
        </div>
       
    </div>

  )
}

export default CssBlock