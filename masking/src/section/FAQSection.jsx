import React from "react";
import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import styles from "../page/OurStory.module.css";

function FAQSection() {
  const faqData = [
    {
      question: "Why is wearing a mask important?",
      answer: `Wearing a mask is a crucial preventive measure to combat the spread of infectious diseases like COVID-19. Masks act as a barrier, reducing the release of respiratory droplets carrying viruses and bacteria when an infected person talks, coughs, or sneezes. Moreover, masks protect the wearer from inhaling harmful particles in the air, especially in high-risk environments. By wearing masks in public spaces and crowded gatherings, we safeguard ourselves and others, particularly vulnerable individuals like the elderly or those with underlying health conditions. Masks are an essential part of the comprehensive strategy to control outbreaks and minimize transmission. Combining mask-wearing with other preventive measures like social distancing and hand hygiene significantly contributes to flattening the curve and protecting public health.`,
    },
    {
      question: "When should I wear a mask?",
      answer: `You should wear a mask whenever you are in public settings where social distancing is challenging to maintain. This includes grocery stores, public transportation, workplaces, and crowded outdoor areas. Additionally, wearing masks is crucial during the COVID-19 pandemic, especially in areas experiencing community spread. Even if you don't feel sick, you could be asymptomatic and unknowingly spread the virus to others. By wearing masks consistently and correctly, we protect ourselves and everyone around us. Remember to wear masks in enclosed spaces with poor ventilation and when interacting with people from outside your household. Complying with mask mandates and public health guidelines is essential to safeguarding public health and reducing the risk of transmission.`,
    },
    {
      question: "What type of mask should I use?",
      answer: `For general public use, cloth masks and surgical masks are effective in reducing the spread of respiratory droplets. Cloth masks made of multiple layers of tightly woven fabric offer good filtration. Surgical masks provide an additional layer of protection and are suitable for single-use. N95 respirators are recommended for healthcare workers and individuals in close contact with COVID-19 patients, as they offer high filtration efficiency. It's essential to wear masks that cover your nose, mouth, and chin completely, without leaving gaps. Fit is crucial for mask effectiveness. Avoid masks with exhalation valves, as they allow respiratory droplets to escape. Remember to wash reusable masks regularly and dispose of disposable masks responsibly.`,
    },
    {
      question: "How should I wear and handle my mask?",
      answer: `Proper mask-wearing and handling are essential for maximum protection. Before putting on your mask, wash your hands thoroughly with soap and water or use hand sanitizer. Ensure the mask covers your nose, mouth, and chin entirely, leaving no gaps. Avoid touching the front of the mask while wearing it, as it may be contaminated. If you need to touch your mask, do so only by the ear loops or ties. When removing the mask, use the ear loops or ties and avoid touching the front. Discard disposable masks immediately after use in a closed trash bin. For reusable masks, wash them with soap and water after each use. Store clean masks in a clean, breathable container. Regularly inspect your mask for signs of wear and tear, and replace damaged or soiled masks promptly.`,
    },
    {
      question: "Are masks effective against COVID-19?",
      answer: `Yes, masks are highly effective in reducing the transmission of COVID-19. Numerous studies have demonstrated that wearing masks significantly decreases the spread of respiratory droplets that may contain the virus. Masks provide source control, preventing infected individuals, including those with asymptomatic or presymptomatic infections, from releasing respiratory particles into the air. Masks also offer some degree of protection for wearers by reducing exposure to infected respiratory droplets. However, masks are most effective when combined with other preventive measures like maintaining physical distance, practicing good hand hygiene, and avoiding large gatherings. Wearing masks not only protects ourselves but also demonstrates solidarity and concern for the health and safety of our communities.`,
    },
  ];

  return (
    <Box mt={8}>
     <Heading as="h2" size="lg" mb={4} textAlign="center" className={styles.headingAnimation}>
        Frequently Asked Questions <span className={styles.rotatequestionmark}>?</span>
      </Heading>
      <Accordion allowToggle className={styles.customAccordion}>
        {faqData.map((faq, index) => (
          <AccordionItem key={index} className={styles.customAccordionItem}>
            <h2>
              <AccordionButton className={styles.customAccordionButton}>
                <Box flex="1" textAlign="left">
                  {faq.question}
                </Box>
                <AccordionIcon className={styles.customAccordionIcon} />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.customAccordionPanel} pb={4}>
              {faq.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}

export default FAQSection;
