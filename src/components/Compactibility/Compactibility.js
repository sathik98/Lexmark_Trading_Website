import React from "react";
import "../../stylesheets/Compactibility/Compactibility.scss";
import one from "../../assests/Compact/compact.png";
import two from "../../assests/Compact/reliable.png";

const Compactibility = () => {
  return (
    <div className="compact_reliable_main_wrapper">
      <div className="compact_reliable_inner_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6 box-one">
              <div className="box-one-inner">
                <div className="box-one-head">
                  <p>COMPATIBILITY</p>
                  <h3>
                    Buy, Sell, Trade, and manage your orders even on the go
                  </h3>
                </div>

                <div className="box-one-content">
                  In Lexmark Trading Exchange, the live trading account provides
                  access to the world of Cryptocurrencies trading. Here traders
                  can buy, sell, and trade the market from any place and devices
                  mentioned in the download section. The price and market
                  information displayed in the platform are real-time which
                  assists the traders to buy, sell, trade, and manage pending
                  orders easily from any compactible device.
                </div>

                <div className="box-one-btn">
                  <button>DOWNLOAD THE APP</button>
                </div>
                
              </div>
              <div className="box-one-img">
                  <img src={one}></img>
                </div>
            </div>
            <div className="col-md-6 box-two">
              <div className="box-one-inner">
                <div className="box-one-head">
                  <p>RELIABILITY</p>
                  <h3>Platform’s Security Measures</h3>
                </div>

                <div className="box-one-content">
                  <ul>
                    <li>
                      We follow industry best practices in order to secure
                      clients's digital assests.
                    </li>
                    <li>
                      Each client's crypto assests are stored in seperate assest
                      specific wallet making our customer crypto assest very
                      secure.
                    </li>
                    <li>2- factor authentication for client wallet access.</li>
                    <li>
                      Every transaction involved the transsfer of funds are
                      double confirmned by trusted human resources in UDCX.{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="box-one-img">
                <img src={two}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compactibility;
