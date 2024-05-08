import React, { useState } from 'react';
import './dropdown.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Dropdown = () => {
  const [showMenu, setShowMenu] = useState(false);
console.log("showMenu -",showMenu)
  const showDropdown = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header">
      <div className="dropdown">
        <div className="dropbtn icons" onClick={showDropdown}>
            <FontAwesomeIcon icon={faEllipsisV} color="black" />
        </div>
        <div id="myDropdown" className={`dropdown-content ${showMenu ? 'show' : ''}`}>
          <a href="#home">Open</a>
          <a href="#about">Edit</a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;