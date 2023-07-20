import { Flex, Spacer, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import Myimage from "./Image/MaSk.jpg";
import "./Navbar.css"; // Import the CSS file
import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
  return (
    <Flex
      alignItems="center"
     
      data-testid="navbar"
      className="navbar-container"
    >
         <div className={`navbar-hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {/* add link for Home page */}
      <Link as={ChakraLink} to="/" className="navbar-logo">
        <img src={Myimage} alt="LOGO" className="navbar-logo-image" />
      </Link>

        {/* Hamburger icon */}
     

      {/* Responsive navigation links */}
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <Link as={ChakraLink} to="/ourstory" className="navbar-link">
          Our Story
        </Link>
        <Link as={ChakraLink} to="/community" className="navbar-link">
          Community
        </Link>
        <Link as={ChakraLink} to="/ourmission" className="navbar-link">
          Our Mission
        </Link>
        <Link as={ChakraLink} to="/about" className="navbar-link">
          About
        </Link>
        </div>
        {/* Render login button within the links div */}
        {
          true ? <Link as={ChakraLink} to="/login">
            <Button colorScheme='teal' className="navbar-button">Log In</Button>
          </Link> : <Link as={ChakraLink} to="/">
            <Button className="navbar-button">hey</Button>
          </Link>
        }
   
    </Flex>
  );
}

export default Navbar;
