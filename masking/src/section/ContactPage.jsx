import React from "react";
import { Box, Heading, Text, Link } from "@chakra-ui/react";
// import styles from "./contact.module.css"; 
import styles from "./contact.module.css"; // Import the CSS module styles

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <Heading as="h1" size="xl" mb={4} className={styles.heading}>
        Contact Us
      </Heading>
      <Text fontSize="lg" mb={4}>
        Thank you for your interest in contacting us. We value your feedback, inquiries, and suggestions. Please feel free to reach out to us using any of the following methods:
      </Text>

      <Box mb={4}>
        <Heading as="h2" size="lg" mb={2} className={styles.subheading}>
          Email:
        </Heading>
        <Text fontSize="lg">
          You can email us at <Link color="blue.500" href="hello@masking.com">contact@example.com</Link>. We will get back to you as soon as possible.
        </Text>
      </Box>

      <Box mb={4}>
        <Heading as="h2" size="lg" mb={2} className={styles.subheading}>
          Phone:
        </Heading>
        <Text fontSize="lg">
          If you prefer to speak with us directly, you can call us at <Link color="blue.500" href="tel:+1234567890">+1 (234) 567-890</Link>. Our phone lines are open during business hours.
        </Text>
      </Box>

      <Box mb={4}>
        <Heading as="h2" size="lg" mb={2} className={styles.subheading}>
          Address:
        </Heading>
        <Text fontSize="lg">
          You can also visit us in person at our location:
        </Text>
        <Text fontSize="lg">
          123 Main Street, City, Country, Zip Code
        </Text>
      </Box>

      <Text fontSize="lg" mb={4}>
        If you have any specific questions, requests, or need assistance, don't hesitate to get in touch with us. We are here to help and provide you with the best service possible.
      </Text>

      <Text fontSize="lg" mb={4}>
        We look forward to hearing from you and thank you for choosing us.
      </Text>

      <Box mb={4}>
        <Heading as="h2" size="lg" mb={2} className={styles.subheading}>
          Additional Information:
        </Heading>
        <ul>
          <li className={styles.listItem}>
            Our support team is available 24/7 to assist you with any queries.
          </li>
          <li className={styles.listItem}>
            For business inquiries, please contact our sales department.
          </li>
          <li className={styles.listItem}>
            Follow us on social media for updates and promotions.
          </li>
        </ul>
      </Box>
    </div>
  );
};

export default ContactPage;
