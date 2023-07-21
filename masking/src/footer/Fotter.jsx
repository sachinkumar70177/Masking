import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";
import {  Link, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-container">
        <div className="footer-logo">
        <h2>Say Masking</h2>
          <p className="footer-text" style={{fontSize:"13px"}}>
          Filter out the noise and nurture your <br />inbox with health and wellness advice <br />
          that’s inclusive and rooted in medical expertise 
          </p>
        </div>
        <div className="footer-links-container">
          <div className="footer-container1">
            <div className="footer-product-container">
              <p className="footer-text06">{props.text}</p>
              <p className="footer-text07">{props.text1}</p>
              <p className="footer-text08">{props.text2}</p>
              <p className="footer-text09">{props.text3}</p>
              <p>{props.text4}</p>
            </div>
            <div className="footer-company-container">
              <p className="footer-text11">{props.text5}</p>
              <p className="footer-text12">{props.text6}</p>
              <p className="footer-text13">{props.text7}</p>
              <p className="footer-text14">{props.text8}</p>
              <p>{props.text9}</p>
            </div>
          </div>
          <div className="footer-container2">
            <div className="footer-contact">
              <p className="footer-text16">{props.text10}</p>
              <p className="footer-text17">{props.text11}</p>
              <p>{props.text12}</p>
            </div>
            <div className="footer-socials">
              <p className="footer-text19">{props.text13}</p>
              <div className="footer-icon-group">
                {/* Facebook Icon */}
                <Link href="#" title="Facebook" isExternal>
                  <FaFacebook size={24} color="gray" />
                </Link>
                <Spacer/>
                {/* Twitter Icon */}
                <Link href="#" title="Twitter" isExternal>
                  <FaTwitter size={24} color="gray" />
                </Link>
                <Spacer/>
                {/* Instagram Icon */}
                <Link href="#" title="Instagram" isExternal>
                  <FaInstagram size={24} color="gray" />
                </Link>
                <Spacer/>
                {/* Github Icon */}
                <Link href="#" title="Github" isExternal>
                  <AiFillGithub size={24} color="gray" />
                </Link>
                <Spacer/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="footer-separator"/>
      <span className="footer-text20">
        <span>© 2021 Masking, All Rights Reserved.</span>
      </span>
      
      <hr className="footer-separator"/>
    </footer>
  );
};

Footer.defaultProps = {
  image_src: "",
  image_alt: "logo",
  text: "Product",
  text1: "Features",
  text2: "Pricing",
  text3: "Tutorials",
  text4: "Releases",
  text5: "Company",
  text6: "About",
  text7: "Careers",
  text8: "Contact",
  text9: "Blog",
  text10: "Contact Us",
  text11: "hello@masking.com",
  text12: "+123 (4567) 890",
  text13: "Follow Us",
};

Footer.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  text11: PropTypes.string,
  text12: PropTypes.string,
  text13: PropTypes.string,
};

export default Footer;
