import "./wallet.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faChevronLeft , faWallet, faCompass, faBell, faGear, faAngleDown} from '@fortawesome/free-solid-svg-icons';


const Wallet = () => {
  return (
    <div className="container">
      <div className="container-header">
        <div><FontAwesomeIcon icon={faChevronLeft} /></div>
        <div>Bitcoin Wallet</div>
        <div><FontAwesomeIcon icon={faEllipsisV} /></div>
      </div>
      <div className="container-body card">
        <div className="box-shadow">
          <div className="box-top">
            <div className="coin-header-logo">
              <div>img</div>
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
          <div><FontAwesomeIcon icon={faAngleDown} /></div>
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
            <div>low</div>
             <div>high</div>   
        </div>
        <div className="graph">
            show graph here
        </div>
      </div>
      <div className="buy-sell">
            <div className="container-body">
                <div>Img</div>
                <div>Buy BTC</div>
            </div>
            <div className="container-body">
                <div>Img</div>
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
