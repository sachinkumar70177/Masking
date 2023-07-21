import { Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import Myimage from "./Image/MaSk.jpg";
import styles from "./Navbar.module.css"; // Import the CSS module

import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex
      alignItems="center"
      data-testid={styles["navbar"]} 
      className={styles["navbar-container"]} 
    >
        <Link as={ChakraLink} to="/" className={styles["navbar-logo"]}> {/* Use the CSS module class */}
        <img src={Myimage} alt="LOGO" className={styles["navbar-logo-image"]} /> {/* Use the CSS module class */}
      </Link>
      
      <div className={`${styles["navbar-hamburger"]} ${isMenuOpen ? styles["active"] : ''}`} onClick={toggleMenu}>
        <div className={styles["line"]}></div>
        <div className={styles["line"]}></div>
        <div className={styles["line"]}></div>
      </div>

      {/* Add link for Home page */}
      
      

      {/* Responsive navigation links */}
      <div className={`${styles["navbar-links"]} ${isMenuOpen ? styles["active"] : ''}`}> {/* Use the CSS module class */}
        <Link as={ChakraLink} to="/ourstory" className={styles["navbar-link"]}> {/* Use the CSS module class */}
          Our Story
        </Link>
        <Link as={ChakraLink} to="/community" className={styles["navbar-link"]}> {/* Use the CSS module class */}
          Community
        </Link>
        <Link as={ChakraLink} to="/ourmission" className={styles["navbar-link"]}> {/* Use the CSS module class */}
          Our Mission
        </Link>
        <Link as={ChakraLink} to="/about" className={styles["navbar-link"]}> {/* Use the CSS module class */}
          About
        </Link>
      </div>

      {/* Render login button within the links div */}
      {
        true ? (
          <Link as={ChakraLink} to="/login">
            <Button colorScheme='teal' className={styles["navbar-button"]}>Log In</Button> {/* Use the CSS module class */}
          </Link>
        ) : (
          <Link as={ChakraLink} to="/">
            <Button className={styles["navbar-button"]}>hey</Button> {/* Use the CSS module class */}
          </Link>
        )
      }
    </Flex>
  );
}

export default Navbar;
