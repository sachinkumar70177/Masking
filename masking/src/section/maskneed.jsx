import { Container, Grid } from "@chakra-ui/react";
import React from "react";
import style from "./Maskneed.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGlobe } from "@fortawesome/free-solid-svg-icons";
function Maskneed() {
  return (
    <Container>
        <p style={{textAlign:"center",fontSize: "28px"}} className={style.globe}><FontAwesomeIcon icon={faGlobe} className={style.rotateglobe}/></p>
      <h1 style={{ textAlign: "center", fontSize: "48px" }}>
        Why does the world need <br /> you to wear a <span className={style.globe}>mask?</span>
      </h1>
      {/*  http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT} */}
      {
        
      }
      <Grid></Grid>
    </Container>
  );
}

export default Maskneed;
