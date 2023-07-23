import {
  Box,
  Text,
  Button,
 
} from "@chakra-ui/react";
import { useState } from "react";
import renderIcon from "./iconmapper";
import styles from "./MaskneedCard.module.css"; // Import the CSS module file

const MaskneedCard = ({ title, information, icon }) => {
  const [showDescription, setShowDescription] = useState(false);
  const toggleDescription = () => {
    setShowDescription((prevShowDescription) => !prevShowDescription);
  };
  

  return (<>
    <Box className={styles.maskneedcard} >
      <div className={styles.iconContainer}>{renderIcon(icon)}</div>
      <Text
        fontSize="xl"
        fontWeight="bold"
       
        className={styles.maskneedtitle}
      >
        {title}
      </Text>
      {showDescription && <Text fontSize="sm">{information}</Text>}
      <Button
        size="sm"
        colorScheme="blue"
        variant="outline"
       
        className={styles.maskneedbutton}
        onClick={toggleDescription}
      >
        {showDescription ? "Hide Description" : "Show Description"}
      </Button>
{/* modal */}

    </Box>
    </>
  );
};
//  className={styles.maskneedbutton}

export default MaskneedCard;
