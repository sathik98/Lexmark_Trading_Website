import { useEffect, useState, useMemo, useRef } from "react";
import "../../stylesheets/AboutUs/AboutUs.scss";
import Navbar from "../Navbar/Navbar";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import bitcoin from "../../assests/Aboutus/bitcoin.png";
import contactweb from "../../assests/Contact/contactweb.png";
import contactmail from "../../assests/Contact/contactmail.png";
import contactmap from "../../assests/Contact/contactmap.png";
import contactphone from "../../assests/Contact/contactphone.png";
import contactbanner from "../../assests/Contact/contactbanner-bg.jpg";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isContactTabClicked, setIsContactTabClicked] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "tab5") {
      setIsContactTabClicked(true);
    } else {
      setIsContactTabClicked(false);
    }
  };
  return (
    <div className="aboutus_main_wrapper">
      <Navbar />
      <div className="aboutus-inner-wrapper">
        {activeTab === "tab1" && (
          <div className="banner_content_wrap">
            <div className="text_wrap">
              <p>AN EXCHANGE THAT BRINGS AND SELLER TOGETHER</p>
              <h3>
                Fully electronic exchange with an automated trading system
              </h3>
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="banner_content_wrap">
            <div className="text_wrap">
              <p>Vision & Mission</p>
              <h3>
                Fully electronic exchange with an automated trading system
              </h3>
            </div>
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="banner_content_wrap">
            <div className="text_wrap">
              <p>Career</p>
              <h3>
                Fully electronic exchange with an automated trading system
              </h3>
            </div>
          </div>
        )}
        {activeTab === "tab4" && (
          <div className="banner_content_wrap">
            <div className="text_wrap">
              <p>Feedback</p>
              <h3>
                Fully electronic exchange with an automated trading system
              </h3>
            </div>
          </div>
        )}
        {activeTab === "tab5" && (
          <div className="banner_content_wrap">
            <div className="text_wrap">
              <p>CONTACTS</p>
              <h3>We're always here to help</h3>
            </div>
          </div>
        )}
      </div>
      <div className="aboutus-tabs-wrap">
        <div className="row">
          <div className="inner-tabs">
            <div className="container subnavbar">
              <div
                className={`tab ${
                  activeTab === "tab1" ? "active-tab-line" : ""
                }`}
              >
                <button
                  className={activeTab === "tab1" ? "active" : ""}
                  onClick={() => handleTabClick("tab1")}
                >
                  Company Overview
                </button>
              </div>
              <div
                className={`tab ${
                  activeTab === "tab2" ? "active-tab-line" : ""
                }`}
              >
                <button
                  className={activeTab === "tab2" ? "active" : ""}
                  onClick={() => handleTabClick("tab2")}
                >
                  Vision & Mission
                </button>
              </div>
              <div
                className={`tab ${
                  activeTab === "tab3" ? "active-tab-line" : ""
                }`}
              >
                <button
                  className={activeTab === "tab3" ? "active" : ""}
                  onClick={() => handleTabClick("tab3")}
                >
                  Career
                </button>
              </div>

              <div
                className={`tab ${
                  activeTab === "tab4" ? "active-tab-line" : ""
                }`}
              >
                <button
                  className={activeTab === "tab4" ? "active" : ""}
                  onClick={() => handleTabClick("tab4")}
                >
                  Feedback
                </button>
              </div>

              <div
                className={`tab ${
                  activeTab === "tab5" ? "active-tab-line" : ""
                }`}
              >
                <button
                  className={activeTab === "tab5" ? "active" : ""}
                  onClick={() => handleTabClick("tab5")}
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="tab-content">
              {activeTab === "tab1" && (
                <>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 box-one">
                        <div className="box-one-inner">
                          <div className="heading">
                            <p className="why">LEXMARK</p>
                            <h4 className="topic">Company Overview</h4>
                          </div>

                          <div className="inner-box-content">
                            <p>
                              Lexmark trading is an exchange for
                              Cryptocurrencies jointly promoted by Pride Holding
                              and Partners. Pride Holding is chaired by Her
                              Excellency Shaikha Moaza Obaid Suhail Al Maktoum,
                              is a nonbanking, private network of multi-national
                              companies headquartered in Dubai, United Arab
                              Emirates. Founded in 1992, Pride has functioned in
                              a decentralized process and has built a corporate
                              community of over 10,000 employees. Over 3,000
                              independent representatives, affiliates and
                              brokers belonging to this network, benefit from
                              Pride's brand recognition as well as Pride's
                              growing network.
                              <br /> <br />
                              Lexmark trading is a crypto currency exchange that
                              brings buyer and seller together to buy, sell and
                              trade various Cryptocurrencies. This is fully
                              electronic exchange with an automated trading
                              system developed by our software partner, AX1
                              system. The system which is based upon the block
                              chain technology allows buyer and seller to send,
                              receive and trade in our state-of-the-art platform
                              and associated crypto wallet. Lexmark trading
                              Strictly following the Anti-Money laundering (AML)
                              and Combating the Financing of Terrorism (CFT)
                              policies.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 box-one-img ">
                        <div className="img-div">
                          <img src={bitcoin}></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {activeTab === "tab2" && (
                <>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 box-one">
                        <div className="box-one-inner">
                          <div className="heading">
                            <p className="why">LEXMARK</p>
                            <h4 className="topic">Vision & Mission</h4>
                          </div>

                          <div className="inner-box-content">
                            <p>
                              Lexmark trading is an exchange for
                              Cryptocurrencies jointly promoted by Pride Holding
                              and Partners. Pride Holding is chaired by Her
                              Excellency Shaikha Moaza Obaid Suhail Al Maktoum,
                              is a nonbanking, private network of multi-national
                              companies headquartered in Dubai, United Arab
                              Emirates. Founded in 1992, Pride has functioned in
                              a decentralized process and has built a corporate
                              community of over 10,000 employees. Over 3,000
                              independent representatives, affiliates and
                              brokers belonging to this network, benefit from
                              Pride's brand recognition as well as Pride's
                              growing network.
                              <br /> <br />
                              Lexmark trading is a crypto currency exchange that
                              brings buyer and seller together to buy, sell and
                              trade various Cryptocurrencies. This is fully
                              electronic exchange with an automated trading
                              system developed by our software partner, AX1
                              system. The system which is based upon the block
                              chain technology allows buyer and seller to send,
                              receive and trade in our state-of-the-art platform
                              and associated crypto wallet. Lexmark trading
                              Strictly following the Anti-Money laundering (AML)
                              and Combating the Financing of Terrorism (CFT)
                              policies.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 box-one-img ">
                        <div className="img-div">
                          <img src={bitcoin}></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {activeTab === "tab3" && (
                <>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 box-one">
                        <div className="box-one-inner">
                          <div className="heading">
                            <p className="why">LEXMARK</p>
                            <h4 className="topic">Career</h4>
                          </div>

                          <div className="inner-box-content">
                            <p>
                              Lexmark trading is an exchange for
                              Cryptocurrencies jointly promoted by Pride Holding
                              and Partners. Pride Holding is chaired by Her
                              Excellency Shaikha Moaza Obaid Suhail Al Maktoum,
                              is a nonbanking, private network of multi-national
                              companies headquartered in Dubai, United Arab
                              Emirates. Founded in 1992, Pride has functioned in
                              a decentralized process and has built a corporate
                              community of over 10,000 employees. Over 3,000
                              independent representatives, affiliates and
                              brokers belonging to this network, benefit from
                              Pride's brand recognition as well as Pride's
                              growing network.
                              <br /> <br />
                              Lexmark trading is a crypto currency exchange that
                              brings buyer and seller together to buy, sell and
                              trade various Cryptocurrencies. This is fully
                              electronic exchange with an automated trading
                              system developed by our software partner, AX1
                              system. The system which is based upon the block
                              chain technology allows buyer and seller to send,
                              receive and trade in our state-of-the-art platform
                              and associated crypto wallet. Lexmark trading
                              Strictly following the Anti-Money laundering (AML)
                              and Combating the Financing of Terrorism (CFT)
                              policies.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 box-one-img ">
                        <div className="img-div">
                          <img src={bitcoin}></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {activeTab === "tab4" && (
                <>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 box-one">
                        <div className="box-one-inner">
                          <div className="heading">
                            <p className="why">LEXMARK</p>
                            <h4 className="topic">Feedback</h4>
                          </div>

                          <div className="inner-box-content">
                            <p>
                              Lexmark trading is an exchange for
                              Cryptocurrencies jointly promoted by Pride Holding
                              and Partners. Pride Holding is chaired by Her
                              Excellency Shaikha Moaza Obaid Suhail Al Maktoum,
                              is a nonbanking, private network of multi-national
                              companies headquartered in Dubai, United Arab
                              Emirates. Founded in 1992, Pride has functioned in
                              a decentralized process and has built a corporate
                              community of over 10,000 employees. Over 3,000
                              independent representatives, affiliates and
                              brokers belonging to this network, benefit from
                              Pride's brand recognition as well as Pride's
                              growing network.
                              <br /> <br />
                              Lexmark trading is a crypto currency exchange that
                              brings buyer and seller together to buy, sell and
                              trade various Cryptocurrencies. This is fully
                              electronic exchange with an automated trading
                              system developed by our software partner, AX1
                              system. The system which is based upon the block
                              chain technology allows buyer and seller to send,
                              receive and trade in our state-of-the-art platform
                              and associated crypto wallet. Lexmark trading
                              Strictly following the Anti-Money laundering (AML)
                              and Combating the Financing of Terrorism (CFT)
                              policies.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 box-one-img ">
                        <div className="img-div">
                          <img src={bitcoin}></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {activeTab === "tab5" && (
                <>
                  <div
                    className="container"
                    style={{ background: "white", padding: "50px" }}
                  >
                    <div className="row">
                      <div className="heading">
                        <p className="why">Call us / Write us</p>
                        <h4 className="topic">Contact Lexmark</h4>
                      </div>
                      <div className="card-container">
                        <div className="row">
                          <div className="col-xl-4 col-md-6 col-12 mini-card">
                            <div className="card">
                              <div className="media d-flex">
                                <div className="icon">
                                  <img src={contactphone}></img>
                                </div>
                                <div className="details">
                                  <h3>Call</h3>
                                  <p>+22 445557 8790</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6 col-12 mini-card">
                            <div className="card">
                              <div className="media d-flex">
                                <div className="icon">
                                  <img src={contactmail}></img>
                                </div>
                                <div className="details">
                                  <h3>Email</h3>
                                  <p>info@lexmark.com</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6 col-12 mini-card">
                            <div className="card">
                              <div className="media">
                                <div className="icon">
                                  <img src={contactweb}></img>
                                </div>
                                <div className="details">
                                  <h3>Website</h3>
                                  <p>www.unicoindcx.com</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 box-one">
                        <div className="box-one-inner">
                          <div className="inner-box-content">
                            <div className="address">
                              <h3>Address | Country Name</h3>
                              <p>
                                Lexmark Trading <br />
                                Unit No. 3A-16, Level 3A <br /> Labuan Times
                                Square <br /> Jalan Merdeka, 87000 Labuan F.T
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 box-one-img ">
                        <div className="img-div">
                          <img src={contactmap}></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Experience />
      <Footer />
    </div>
  );
};

export default AboutUs;
