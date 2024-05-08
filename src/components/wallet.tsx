import "./wallet.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft , faWallet, faCompass, faBell, faGear, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import btclogo from '../assets/bitcoin-btc-logo.png'
import Dropdown from "./dropdown";
import AreaChartComponent from "./areachart";
import dollerblue from '../assets/dollar-blue.png'
import dollerpink from '../assets/doller-sign-pink.png'

const Wallet = () => {

  return (
    <div className="container">
      <div className="container-header">
        <div><FontAwesomeIcon icon={faChevronLeft} /></div>
        <div>Bitcoin Wallet</div>
        <div></div>
        <Dropdown />
      </div>
      <div className="container-body card">
        <div className="box-shadow">
          <div className="box-top">
            <div className="coin-header-logo">
              <div className="logo"><img src={btclogo} /></div>
              <div>Bitcoin</div>
            </div>
            <div>BTC</div>
          </div>
          <div className="box-middle">
            3.2345344 BTC
          </div>
          <div className="box-bottom">
            <div className="usd-price">$16.9898 USD</div>
            <div className="variation">-2.345%</div>
          </div>
          <div className="dropdownarrow"><FontAwesomeIcon icon={faAngleDown} /></div>
        </div>
      </div>
      <div className="selection-time">
        <div>Day</div>
        <div>Week</div>
        <div>Month</div>
        <div>Year</div>
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
                <div><img src={dollerblue}  width="30px"/></div>
                <div>Buy BTC</div>
            </div>
            <div className="container-body">
                <div><img src={dollerpink} width="30px"/></div>
                <div>sell BTC</div>
            </div>
      </div>
      <div className="container-footer">
        <div className="selection-footer">
            <div><FontAwesomeIcon icon={faWallet} /></div>
            <div><FontAwesomeIcon icon={faCompass} /></div>
            <div><FontAwesomeIcon icon={faBell} /></div>
            <div><FontAwesomeIcon icon={faGear} /></div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
