import { useState, useEffect } from "react";
import { Container, Grid, GridItem, useMediaQuery,useDisclosure,Box } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { useSpring, animated } from "react-spring";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  Stack,
  Heading,
  Divider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

import axios from "axios";
import style from "./Community.module.css";
function Community() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [showFullInfo, setShowFullInfo] = useState(false); 
  const { isOpen, onOpen, onClose } = useDisclosure()
  const maxLength = 100;
  const fetchdata = () => {
    setloading(true);

    axios
      .get(`http://localhost:8080/blogs`)
      .then((data) => {
        console.log(data?.data);
        setdata(data?.data);
        setloading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const visibleBlogs = showAll ? data : data.slice(0, 6);
  const springProps = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(100px)" },
  });
//   if(loading){
// return <Box padding='6' boxShadow='lg' bg='white'>
// <SkeletonCircle size='10' />
// <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
// </Box>
//   }
  return (
    <Container>
  
      <h1 style={{ textAlign: "center", fontSize: "48px" }}>
       Read Blogs to get updated
      </h1>
      {/*  http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT} */}
      <div className={style.container}>
      <animated.div style={springProps}>
          <Grid
            templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
            width="85%"  margin="auto"
            gap={2}
            className={style.grid}
            onClick={onOpen}
          >
            {visibleBlogs.map((el, index) => (
              <GridItem key={index} className={style.card}>
                <Card maxW="sm" height="100%">
                  <CardBody className={style["cardbody"]}>
                    <Image
                      src={el.image}
                      alt={el.title}
                      borderRadius="lg"
                      className={style["cardimage"]}
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{el.title}</Heading>
                      <Text className={style.text}>
                       {el.information}
                      </Text>
                     
                    </Stack>
                    
                  </CardBody>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </animated.div>
        {!showAll && data.length > 6 && (
          <Button
            className={style["showmorebutton"]}
            onClick={() => setShowAll(true)}
          >
            Show all
          </Button>
        )}
      </div>
    </Container>
  );
}
export default Community;
