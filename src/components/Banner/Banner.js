import "../../stylesheets/Banner/Banner.scss";
import React, { useState, useEffect } from "react";
import bitcoin from "../../assests/Banner/bitcoin.png";
import ethereum from "../../assests/Banner/ethereum.png";
import litecoin from "../../assests/Banner/litecoin.png";

const Banner = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const finalValue1 = 18152.42; // set the final value here
  // useEffect(() => {
  //   const intervalId1 = setInterval(() => {
  //     setCount1((prevCount) => {
  //       if (prevCount < finalValue1) {
  //         return prevCount + 1;
  //       } else {
  //         clearInterval(intervalId1);
  //         return prevCount;
  //       }
  //     });
  //   }, 0.000000001);
  //   return () => clearInterval(intervalId1);
  // }, [finalValue1]);

  useEffect(() => {
    const increment = finalValue1 / 1000; // Divide the final value by the number of steps you want to reach it
    const intervalId = setInterval(() => {
      setCount1(prevCount => {
        const newCount = prevCount + increment;
        return newCount >= finalValue1 ? finalValue1 : newCount; // Ensure the count doesn't exceed the final value
      });
    }, 10); // Set a small interval for smooth incrementation

    return () => clearInterval(intervalId);
  }, []);
  
  const finalValue2 = 546.64; // set the final value here
  useEffect(() => {
    const intervalId2 = setInterval(() => {
      setCount2((prevCount) => {
        if (prevCount < finalValue2) {
          return prevCount + 1;
        } else {
          clearInterval(intervalId2);
          return prevCount;
        }
      });
    }, 200);
    return () => clearInterval(intervalId2);
  }, [finalValue2]);

  const finalValue3 = 75.72; // set the final value here
  useEffect(() => {
    const intervalId3 = setInterval(() => {
      setCount3((prevCount) => {
        if (prevCount < finalValue3) {
          return prevCount + 1;
        } else {
          clearInterval(intervalId3);
          return prevCount;
        }
      });
    }, 200);
    return () => clearInterval(intervalId3);
  }, [finalValue3]);

  const finalValue4 = 14979.2; // set the final value here
  useEffect(() => {
    const intervalId4 = setInterval(() => {
      setCount4((prevCount) => {
        if (prevCount < finalValue4) {
          return prevCount + 1;
        } else {
          clearInterval(intervalId4);
          return prevCount;
        }
      });
    }, 0.000000001);
    return () => clearInterval(intervalId4);
  }, [finalValue4]);

  return (
    <div className="banner_main_wrapper">
      <div className="banner_inner_wrapper">
        <div className="banner_content_wrap">
          <div className="text_wrap">
            <p>METICULOUSLY CRAFTED TRADING SOLUTION</p>

            <h3>
              Safest, Easiest, and the Fastest Way to Sell, and Trade
              Cryptocurrency
            </h3>

            <button>SEE HOW ?</button>
          </div>
        </div>
        <div className="crypto_cost_card">
          <section id="minimal-statistics">
            <div class="row">
              <div class="col-xl-3 col-sm-6 col-12 nnn">
                <div class="card">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="media d-flex">
                        <div class="align-self-center">
                          <img src={bitcoin}></img>
                        </div>
                        <div className="card_name">
                          <p className="btc">BTC-USD</p>
                          <p className="bitcoin">BITCOIN</p>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <div class="media-body text-center">
                          <p className="small-value">(-618.83)&#8595;</p>
                          <button className="high-valuse">${count1}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-12 nnn">
                <div class="card">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="media d-flex">
                        <div class="align-self-center">
                          <img src={ethereum}></img>
                        </div>
                        <div className="card_name">
                          <p className="btc">ETH-USD</p>
                          <p className="bitcoin">ETHEREUM</p>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <div class="media-body text-center">
                          <p className="small-value">(-618.83)&#8595;</p>
                          <button className="high-valuse">${count2}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-12 nnn">
                <div class="card">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="media d-flex">
                        <div class="align-self-center">
                          <img src={litecoin}></img>
                        </div>
                        <div className="card_name">
                          <p className="btc"> LTC-USD</p>
                          <p className="bitcoin">LITECOIN</p>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <div class="media-body text-center">
                          <p className="small-value">(-618.83)&#8595;</p>
                          <button className="high-valuse">${count3}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-12 nnn">
                <div class="card">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="media d-flex">
                        <div class="align-self-center">
                          <img src={bitcoin}></img>
                        </div>
                        <div className="card_name">
                          <p className="btc">BITCOIN</p>
                          <p className="bitcoin">BTCEUR</p>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <div class="media-body text-center">
                          <p className="small-value">(-618.83)&#8595;</p>
                          <button className="high-valuse">${count4}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Banner;
