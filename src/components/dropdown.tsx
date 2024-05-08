import { useState } from "react";
import "./dropdown.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import editDrop from "../assets/edit-drop.svg";
import removeDrop from "../assets/remove-drop.svg";
import shareDrop from "../assets/share-drop.svg";
import collapesDrop from "../assets/collapes-drop.svg";
const Dropdown = () => {
  const [showMenu, setShowMenu] = useState(false);
  const showDropdown = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header">
      <div className="dropdown">
        <div className="dropbtn icons" onClick={showDropdown}>
          <FontAwesomeIcon icon={faEllipsisV} color="black" />
        </div>
        <div
          id="myDropdown"
          className={`dropdown-content ${showMenu ? "show" : ""}`}
        >
          <a href="#Edit">
            <span>Edit</span>
            <img src={editDrop} alt="Edit" />
          </a>
          <a href="#Courier">
            <span>Courier info</span>
            <img src={collapesDrop} alt="Share" />
          </a>
          <a href="#Share">
            <span>Share</span>
            <img src={shareDrop} alt="Share" />
          </a>
          <a href="#Remove">
            <span>Remove</span>
            <img src={removeDrop} alt="Remove" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
