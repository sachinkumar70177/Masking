// import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import styles from "./OurStory.module.css";
import React, { useState, useEffect } from "react";




function OurStory() {
    const [activeLink, setActiveLink] = useState("welcome");

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ["welcome", "founding-story", "mission-vision", "importance", "join-us"];
//       const currentSection = sections.find((section) => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
//         }
//         return false;
//       });

//       if (currentSection) {
//         setActiveLink(currentSection);
//       }
//     };

//     document.addEventListener("scroll", handleScroll);
//     return () => {
//       document.removeEventListener("scroll", handleScroll);
//     };
//   }, [activeLink]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    setActiveLink(sectionId);
  };

  return (
    <Box className={styles.container}>
         <Heading as="h1" id="welcome" color={"rgba(232,48,140)"} textAlign={"center"}>
        Our Story
      </Heading>
      <Breadcrumb spacing="8px" separator="/" className={styles.breadcrumb}>
        <BreadcrumbItem>
          <BreadcrumbLink
            onClick={() => scrollToSection("welcome")}
            className={activeLink === "welcome" ? styles.activeLink : styles.breadcrumbLink}
          >
            Welcome
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            onClick={() => scrollToSection("founding-story")}
            className={
              activeLink === "founding-story" ? styles.activeLink : styles.breadcrumbLink
            }
          >
            Founding Story
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            onClick={() => scrollToSection("mission-vision")}
            className={
              activeLink === "mission-vision" ? styles.activeLink : styles.breadcrumbLink
            }
          >
            Mission & Vision
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            onClick={() => scrollToSection("importance")}
            className={activeLink === "importance" ? styles.activeLink : styles.breadcrumbLink}
          >
            Importance of Masking
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            onClick={() => scrollToSection("join-us")}
            className={activeLink === "join-us" ? styles.activeLink : styles.breadcrumbLink}
          >
            Join Us
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading as="h2" id="welcome" color={"gray"} textDecoration="underline" textDecorationColor={"Highlight"}>
        Welcome To Masking
      </Heading>
      <Text>
        Welcome to Masking, where we believe that wearing masks is crucial for
        public health and safety.
      </Text>
     
      <div className={styles.imageTextContainer}>
        <Image
          src="https://i.pinimg.com/564x/47/98/df/4798df93bb490b2bdcb045273e41e6ee.jpg"
          alt="Mask-wearing"
          className={styles.image}
        />
        <Text className={styles.text}>
          Masking was founded in 2020 during the COVID-19 pandemic. As we
          witnessed the global impact of the virus, we realized the importance
          of mask-wearing in preventing the spread of infectious diseases.
        </Text>
      </div>
      <Heading as="h2" color={"gray"} textDecoration="underline" textDecorationColor={"Highlight"}>Founding Story</Heading>
      <div className={styles.imageTextContainer} id="founding-story">
       
        <Text className={styles.text}>
          Our team of dedicated individuals came together to create a platform
          that would educate and raise awareness about the necessity of wearing
          masks in public spaces and how it can save lives.
        </Text>
        <Image
          src="https://i.pinimg.com/736x/a8/cf/74/a8cf748ca93c0364a9ff8446ae939d79.jpg"
          alt="Founding Team"
          className={styles.image}
        />
      </div>
      <Heading as="h2" color={"gray"} textDecoration="underline" textDecorationColor={"Highlight"}>Mission & Vision</Heading>
      <div className={styles.imageTextContainer} id="mission-vision">
       
        <Image
          src="https://i.pinimg.com/564x/88/44/bb/8844bbbb1d2d297c555c22c1258df395.jpg"
          alt="World Vision"
          className={styles.image}
        />
        <Text className={styles.text}>
          Our mission is simple: to promote mask-wearing as an essential
          preventive measure to protect ourselves and others from contagious
          diseases. We envision a world where mask-wearing becomes a norm, not
          just during pandemics but also during flu seasons and other health
          crises. By doing so, we aim to contribute to the well-being of
          communities worldwide.
        </Text>
       
      </div>
      <UnorderedList>
          <ListItem>
            Empower individuals to protect themselves and others through
            mask-wearing.
          </ListItem>
          <ListItem>
            Educate the public about the benefits of wearing masks during health
            crises.
          </ListItem>
          <ListItem>
            Advocate for mask-wearing as a responsible civic duty.
          </ListItem>
          <ListItem>
            Support healthcare workers and frontliners by reducing the spread of
            infections.
          </ListItem>
        </UnorderedList>
        <Heading as="h2"  color={"gray"} textDecoration="underline" textDecorationColor={"Highlight"}>Importance of Masking</Heading>
      <div className={styles.imageTextContainer} id="importance">
        
        <Text className={styles.text}>
          Studies have shown that wearing masks significantly reduces the spread
          of respiratory droplets that can carry viruses and bacteria. It not
          only protects the wearer but also safeguards those around them,
          particularly vulnerable populations. By wearing masks, we can play an
          active role in curbing the transmission of infectious diseases and
          supporting our healthcare systems. Masking also promotes responsible
          citizenship, showing care and concern for the health and well-being of
          others in our communities.
        </Text>
       
        <Image
          src="https://i.pinimg.com/564x/e3/a7/ac/e3a7ac87364179bde334533db229f083.jpg"
          alt="Importance of Masking"
          className={styles.image}
        />
      </div>
      <UnorderedList>
          <ListItem>Reduces the transmission of respiratory droplets.</ListItem>
          <ListItem>
            Protects vulnerable populations, such as the elderly and
            immunocompromised individuals.
          </ListItem>
          <ListItem>
            Supports public health efforts to control pandemics.
          </ListItem>
          <ListItem>Helps prevent strain on healthcare systems.</ListItem>
        </UnorderedList>
        <Heading as="h2" color={"gray"} textDecoration="underline" textDecorationColor={"Highlight"}>Join Us</Heading>
      <div className={styles.imageTextContainer} id="join-us">
     
        <Image
          src="https://i.pinimg.com/736x/bd/fd/e4/bdfde4007b6ef2f4baaaa23052c63c78.jpg"
          className={styles.image}
        />
        <Text className={styles.text}>
          We invite you to join us in advocating for mask-wearing and spreading
          awareness about its importance. Together, we can make a positive
          impact on public health and build a healthier, safer world for
          everyone. Share our website with your friends and family, follow us on
          social media, and stay up-to-date with the latest information on
          mask-wearing and public health practices. Engage with us in
          discussions and encourage others to adopt mask-wearing as a
          responsible and effective preventive measure.
        </Text>
      </div>

      <Text className={styles.text}>
        Together, let's be proactive in protecting ourselves and our
        communities. Thank you for being a part of the Masking community!
      </Text>
    </Box>
  );
}

export default OurStory;
