import React, { useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <button className="dark" onClick={toggleDarkMode}>
      {isDarkMode ? "Light Mode" : "dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
