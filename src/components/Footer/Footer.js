import React from "react";
import "../../stylesheets/Footer/Footer.css";
import footerlogo from "../../assests/Footer/footerlogo.png";
import social from "../../assests/Footer/social.png";

const Footer = () => {
  return (
    <div className="footer-main-wrapper">
      <section className="contact-area" id="contact">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-10" style={{margin: "0 auto"}}>
              <div class="contact-content text-center">
                <div className="footer-top">
                  <div className="footer-logo">
                    <a href="#">
                      <img src={footerlogo} alt="logo" />
                    </a>

                    <div className="sign-bts">
                      <button className="signin">SIGN IN</button>
                      <button className="signup">SIGN UP</button>
                    </div>
                  </div>
                  <div className="footer-menu">
                    <ul className="footer-menu-ul">
                      <li className="footer-menu-li">About Lexmark</li>
                      <li className="footer-menu-li">Product</li>
                      <li className="footer-menu-li">Membership</li>
                      <li className="footer-menu-li">Legal</li>{" "}
                      <li className="footer-menu-li">Contact</li>
                    </ul>
                  </div>
                  <div className="footer-social">
                    <img src={social}></img>
                  </div>
                </div>
                <div class="hr"></div>
                <h6 className="risk-warn">RISK WARNING</h6>
                <p className="footer-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pulvinar elementum integer enim neque. Posuere ac ut consequat
                  semper viverra nam libero. Posuere sollicitudin aliquam
                  ultrices sagittis orci a scelerisque purus. Congue quisque
                  egestas diam in arcu cursus euismod quis viverra. Tempor id eu
                  nisl nunc mi ipsum faucibus vitae. Ullamcorper a lacus
                  vestibulum sed arcu. Consequat id porta nibh venenatis cras.
                  Quis varius quam quisque id diam vel quam. Feugiat pretium
                  nibh ipsum consequat. Vestibulum mattis ullamcorper velit sed
                  ullamcorper. Consectetur lorem donec massa sapien.
                </p>
                <div class="contact-social">
                  <div className="pri-copy">
                    <div className="privacy">
                      Privacy Policy | Cookie Policy | Risk Disclosure
                    </div>
                    <div className="copyright">
                      © Copyrights 2020 Lexmark | Design : Kappsoft
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Footer;
