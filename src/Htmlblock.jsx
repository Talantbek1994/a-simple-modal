import React from "react";
import noImage from "./assets/no.png";

const Htmlblock = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="html-modal-overlay" onClick={onClose} tabIndex="-1" >
      <div className="blockHtml" onClick={(e) => e.stopPropagation()}>
        <h1>HTML</h1>
        <img onClick={onClose} className="exit" src={noImage} alt="exit" />
        <p>HTML - HYPER TEXT MARKUP LANGUAGE</p>
        <p>
          HTML, or Hypertext Markup Language, is the standard markup language for
          creating web pages and web applications. It defines the structure and
          layout of a web document by using a variety of tags and attributes. HTML
          documents are composed of elements, each marked by tags that indicate
          the beginning and end of the element.
        </p>
        <div className="more">
          <span>More..</span>{" "}
          <a href="https://www.w3schools.com/html/default.asp">w3school</a>
        </div>
      </div>
    </div>
  );
};

export default Htmlblock;
