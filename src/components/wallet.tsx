import "./wallet.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faWallet,
  faCompass,
  faBell,
  faGear,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import btclogo from "../assets/bitcoin-btc-logo.png";
import Dropdown from "./dropdown";
import AreaChartComponent from "./areachart";
import dollerblue from "../assets/dollar-blue.png";
import dollerpink from "../assets/doller-sign-pink.png";
import { useState } from "react";

const Wallet = () => {
  const [selectedIcon, setSelectedIcon] = useState('wallet');
  const [selectedItem, setSelectedItem] = useState('Week');

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };
  const handleIconClick = (iconName: any) => {
    setSelectedIcon(iconName);
  };
  return (
    <div className="container">
      <div className="container-header">
        <div>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div>Bitcoin Wallet</div>
        <Dropdown />
      </div>
      <div className="container-body card">
        <div className="box-shadow">
          <div className="box-top">
            <div className="coin-header-logo">
              <div className="logo">
                <img src={btclogo} />
              </div>
              <div>Bitcoin</div>
            </div>
            <div>BTC</div>
          </div>
          <div className="box-middle">3.2345344 BTC</div>
          <div className="box-bottom">
            <div className="usd-price">$16.9898 USD</div>
            <div className="variation">-2.345%</div>
          </div>
          <div className="dropdownarrow">
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
      </div>
      <div className="selection-time">
        <div className={selectedItem === 'Day' ? 'selected' : ''} onClick={() => handleItemClick('Day')}>Day</div>
        <div className={selectedItem === 'Week' ? 'selected' : ''} onClick={() => handleItemClick('Week')}>Week</div>
        <div className={selectedItem === 'Month' ? 'selected' : ''} onClick={() => handleItemClick('Month')}>Month</div>
        <div className={selectedItem === 'Year' ? 'selected' : ''} onClick={() => handleItemClick('Year')}>Year</div>
      </div>
      <div className="container-body card">
        <div className="high-low-value">
          <div>
            <span className="dot green"></span>
            lower: $875.32
          </div>
          <div>
            <span className="dot red"></span>
            higher: $6857
          </div>
        </div>
        <div className="graph">
          <AreaChartComponent width={430} height={250} />
        </div>
      </div>
      <div className="buy-sell">
        <div className="container-body">
          <div>
            <img src={dollerblue} width="60px" />
          </div>
          <div>Buy BTC</div>
        </div>
        <div className="container-body">
          <div>
            <img src={dollerpink} width="60px" />
          </div>
          <div>sell BTC</div>
        </div>
      </div>
      <div className="container-footer">
      <div className="selection-footer">
        <div onClick={() => handleIconClick('wallet')} className={selectedIcon === 'wallet' ? 'selected' : ''}>
          <FontAwesomeIcon icon={faWallet} style={{ fontSize: '32px' }} />
        </div>
        <div onClick={() => handleIconClick('compass')} className={selectedIcon === 'compass' ? 'selected' : ''}>
          <FontAwesomeIcon icon={faCompass} style={{ fontSize: '32px' }} />
        </div>
        <div onClick={() => handleIconClick('bell')} className={selectedIcon === 'bell' ? 'selected' : ''}>
          <FontAwesomeIcon icon={faBell} style={{ fontSize: '32px' }} />
        </div>
        <div onClick={() => handleIconClick('gear')} className={selectedIcon === 'gear' ? 'selected' : ''}>
          <FontAwesomeIcon icon={faGear} style={{ fontSize: '32px' }} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Wallet;
