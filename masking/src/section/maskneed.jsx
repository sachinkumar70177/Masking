import { Container, Grid, GridItem ,useMediaQuery} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from "./Maskneed.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import MaskneedCard from "./MaskneedCard";
import MaskneedPagination from "./MaskneedPagination";
function Maskneed() {
  const [maskneed, setmaskneed] = useState([]);
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
//   media
  const [isLargerThan1200] = useMediaQuery("(min-width: 1300px)");
  const [isLargerThan992] = useMediaQuery("(min-width: 1070px)");
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
//   media

const getItemsPerPage = () => {
    if (isLargerThan1200) return 4;
    if (isLargerThan992) return 3;
    if (isLargerThan768) return 2;
    return 1;
  };

  const itemsPerPage = getItemsPerPage();
  const totalpage=Math.ceil(20/itemsPerPage)
  const fetchdata = (currentPage,itemsPerPage) => {
    setloading(true);

    axios
      .get(`http://localhost:8080/maskdata?_page=${currentPage}&_limit=${itemsPerPage}`)
      .then((data) => {
        console.log(data.data);
        setmaskneed(data.data)
        setloading(false)
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchdata(currentPage,itemsPerPage)
  },[currentPage,itemsPerPage]);
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
 const onchangecircle=(id)=>{
    setCurrentPage(id)
 }

  return (
    <Container>
      <p
        style={{ textAlign: "center", fontSize: "28px" }}
        className={style.globe}
      >
        <FontAwesomeIcon icon={faGlobe} className={style.rotateglobe} />
      </p>
      <h1 style={{ textAlign: "center", fontSize: "48px" }}>
        Why does the <span className={style.globe}>world</span> need <br /> you to wear a{" "}
        <span className={style.globe}>mask?</span>
      </h1>
      {/*  http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT} */}
      <Grid  w="100%"  gap={2} className={style.grid}>
        {maskneed.map((el, index) => (
        
            <MaskneedCard {...el} key={index}/>
       
        ))}
      </Grid>
      <MaskneedPagination
        currentPage={currentPage}
       totalpage={totalpage}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
        onchangecircle={onchangecircle}
      />
    </Container>
  );
}

export default Maskneed;
