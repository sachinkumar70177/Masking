import ReturnFocus from "./Login";
import { Box, Heading, Text, Image, UnorderedList, ListItem } from "@chakra-ui/react";
import styles from "./about.module.css"; // Import the CSS module styles
import ContactPage from "../section/ContactPage";

function About() {
  return (
<div className={styles.container}>
      <Heading as="h1" size="xl" mb={4} className={styles.heading}>
        About Masking
      </Heading>
      <Text fontSize="lg" mb={4} className={styles.paragraph}>
        Welcome to Masking! We are dedicated to providing you with essential information about the importance of wearing masks and how it contributes to safeguarding public health.
      </Text>
      <Text fontSize="lg" mb={4} className={styles.paragraph}>
        Masks play a crucial role in preventing the spread of infectious diseases, especially during times of pandemics and outbreaks. The ongoing COVID-19 pandemic has highlighted the significance of wearing masks to protect ourselves and others from the virus.
      </Text>

      {/* Image section */}
      <div className={styles.imageWrapper}>
        <Image src="https://i.pinimg.com/564x/0f/a6/56/0fa656c9a79089c5654361cfce8d92bf.jpg" alt="Masking Logo" />
      </div>

      <Text fontSize="lg" mb={4} className={styles.paragraph}>
        Here at Masking, we aim to educate and raise awareness about the various types of masks available, their proper usage, and the science behind their effectiveness. Whether you are a healthcare professional, a student, or a concerned citizen, our goal is to empower you with the knowledge to make informed decisions about mask-wearing.
      </Text>
      <Text fontSize="lg" mb={4} className={styles.paragraph}>
        We also provide updates on the latest guidelines and recommendations from health authorities regarding mask usage. Our team of experts ensures that you have access to accurate and up-to-date information to protect yourself and others.
      </Text>

      {/* Listing section */}
      <div>
        <Heading as="h2" size="lg" mb={2} className={styles.heading}>
          Our Mission:
        </Heading>
        <UnorderedList>
          <ListItem className={styles.listItem}>
            Educate the public about the importance of wearing masks.
          </ListItem>
          <ListItem className={styles.listItem}>
            Provide reliable and evidence-based information on mask usage.
          </ListItem>
          <ListItem className={styles.listItem}>
            Promote a culture of responsible mask-wearing for public health.
          </ListItem>
        </UnorderedList>
      </div>

      <Text fontSize="lg" mb={4} className={styles.paragraph}>
        Together, we can make a difference in controlling the spread of infectious diseases. Join us in promoting a culture of responsible mask-wearing and protecting our communities.
      </Text>
      <Text fontSize="lg" mb={4} className={styles.paragraph}>
        Thank you for visiting Masking, and we hope you find our platform valuable in understanding the importance of masks in safeguarding public health.
      </Text>
      <br /><br />
      <ContactPage/>
    </div>
  )
};
  export default About;