import React from "react";
import "../../stylesheets/Trade/Trade.scss";
import one from "../../assests/Trade/card-one.png";
import two from "../../assests/Trade/card-two.png";
import three from "../../assests/Trade/card-three.png";
import four from "../../assests/Trade/card-four.png";

const Trade = () => {
  return (
    <div className="trade_main_wrappper">
      <div className="trade_inner_wrapper">
        <div className="heading">
          <p className="lexmark">LEXMARK</p>
          <h4 className="topic">How to Trade Cryptocurrencies?</h4>
        </div>

        <div className="card-container">
          <div className="card-inner-conat">
            <div className="card">
              <div className="card-inner">
                <img src={one} alt="Card One"></img>
                <div className="card-body">
                  <h3>Get registered with us</h3>
                  <span>
                    Register with your unique identification to help us ensure
                    your authenticity and to generate your client access
                    credentials.
                  </span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-inner">
                <img src={two} alt="Card Two"></img>
                <div className="card-body">
                  <h3>Link your bank payment method</h3>
                  <span>
                    Enable deposit and withdrawal at the time of buying and
                    selling by linking your bank account or any of your
                    preferred payment methods.
                  </span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-inner">
                <img src={three} alt="Card Three"></img>
                <div className="card-body">
                  <h3>Download Platform </h3>
                  <span>
                    Download our sophisticated trader and gain access to the
                    real time fluctuations of the crypto market from any
                    compatible device.{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-inner">
                <img src={four} alt="Card Four"></img>
                <div className="card-body">
                  <h3>Buy, Sell, and Trade Cryptocurrencies </h3>
                  <span>
                    Once the registration is done and verified, you are all set
                    to trade the cryptocurrencies in an easy, secured, and
                    reliable environment.{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
