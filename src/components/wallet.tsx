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
import dollerblue from "../assets/dollar-blue.png";
import dollerpink from "../assets/doller-sign-pink.png";
import { useState } from "react";
import AreaChartComponent, { DataPoint } from './areachart';

interface Data {
  [key: string]: DataPoint[];
}

const initialData: Data = {
  Day: [
    { name: "Page A", BTC: 4000, amt: 2400 },
    { name: "Page B", BTC: 300, amt: 2210 },
    { name: "Page C", BTC: 2000, amt: 2290 },
    { name: "Page D", BTC: 780, amt: 2000 },
    { name: "Page E", BTC: 1890, amt: 2181 },
    { name: "Page F", BTC: 2390, amt: 2500 },
    { name: "Page G", BTC: 3490, amt: 2100 }
  ],
  Week: [
    { name: "Page A", BTC: 4500, amt: 2400 },
    { name: "Page B", BTC: 3200, amt: 2210 },
    { name: "Page C", BTC: 2300, amt: 2290 },
    { name: "Page D", BTC: 980, amt: 2000 },
    { name: "Page E", BTC: 2090, amt: 2181 },
    { name: "Page F", BTC: 290, amt: 2500 },
    { name: "Page G", BTC: 3590, amt: 2100 }
  ],
  Month: [
    { name: "Page A", BTC: 6000, amt: 2400 },
    { name: "Page B", BTC: 4700, amt: 2210 },
    { name: "Page C", BTC: 3500, amt: 2290 },
    { name: "Page D", BTC: 480, amt: 2000 },
    { name: "Page E", BTC: 3290, amt: 2181 },
    { name: "Page F", BTC: 3790, amt: 2500 },
    { name: "Page G", BTC: 479, amt: 2100 }
  ],
  Year: [
    { name: "Page A", BTC: 8000, amt: 2400 },
    { name: "Page B", BTC: 6500, amt: 2210 },
    { name: "Page C", BTC: 500, amt: 2290 },
    { name: "Page D", BTC: 5680, amt: 2000 },
    { name: "Page E", BTC: 4790, amt: 2181 },
    { name: "Page F", BTC: 590, amt: 2500 },
    { name: "Page G", BTC: 6290, amt: 2100 }
  ]
};

const Wallet = () => {
  const [selectedIcon, setSelectedIcon] = useState("wallet");
  const [selectedItem, setSelectedItem] = useState("Week");

  const [data, setData] = useState<DataPoint[]>(initialData[selectedItem]);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    setData(initialData[item]);
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
        <span>Bitcoin Wallet</span>
        <Dropdown />
      </div>
      <div className="body">
        <div className="container-body card">
          <div className="box-shadow">
            <div className="box-top">
              <div className="coin-header-logo">
                <div className="logo">
                  <img src={btclogo} />
                </div>
                <div>Bitcoin</div>
              </div>
              <span>BTC</span>
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
          <div
            className={selectedItem === "Day" ? "selected" : ""}
            onClick={() => handleItemClick("Day")}
          >
            Day
          </div>
          <div
            className={selectedItem === "Week" ? "selected" : ""}
            onClick={() => handleItemClick("Week")}
          >
            Week
          </div>
          <div
            className={selectedItem === "Month" ? "selected" : ""}
            onClick={() => handleItemClick("Month")}
          >
            Month
          </div>
          <div
            className={selectedItem === "Year" ? "selected" : ""}
            onClick={() => handleItemClick("Year")}
          >
            Year
          </div>
        </div>
        <div className="container-body card">
          <div className="high-low-value">
            <div>
              <span className="dot red"></span>
              lower: $875.32
            </div>
            <div>
              <span className="dot green"></span>
              higher: $6857
            </div>
          </div>
          <div className="graph">
            <AreaChartComponent data={data} width={330} height={250} />
          </div>
        </div>
        <div className="buy-sell">
          <div className="container-body left">
            <div>
              <img src={dollerblue} width="60px" />
            </div>
            <span>Buy BTC</span>
          </div>
          <div className="container-body right">
            <div>
              <img src={dollerpink} width="60px" />
            </div>
            <span>Sell BTC</span>
          </div>
        </div>
      </div>
      <div className="container-footer">
        <div className="selection-footer">
          <div
            onClick={() => handleIconClick("wallet")}
            className={selectedIcon === "wallet" ? "selected" : ""}
          >
            <FontAwesomeIcon icon={faWallet} style={{ fontSize: "32px" }} />
          </div>
          <div
            onClick={() => handleIconClick("compass")}
            className={selectedIcon === "compass" ? "selected" : ""}
          >
            <FontAwesomeIcon icon={faCompass} style={{ fontSize: "32px" }} />
          </div>
          <div
            onClick={() => handleIconClick("bell")}
            className={selectedIcon === "bell" ? "selected" : ""}
          >
            <FontAwesomeIcon icon={faBell} style={{ fontSize: "32px" }} />
          </div>
          <div
            onClick={() => handleIconClick("gear")}
            className={selectedIcon === "gear" ? "selected" : ""}
          >
            <FontAwesomeIcon icon={faGear} style={{ fontSize: "32px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
