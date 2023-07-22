import { Button, Flex, Spacer } from "@chakra-ui/react";
import Imagedisplay from "../resuedCompo/imagedisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import style from "./Home.module.css";
import Maskneed from "../section/maskneed";

function Home() {
  return (
    <div className={style.home}>
      <div>
        <Flex justifyContent="space-around" className={style.star}>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
        </Flex>
        <div style={{ display: "flex" }}>
          <div className={style.container}>
            <img
              src="https://i.pinimg.com/236x/f0/ad/a3/f0ada3101971c622e8a1e10ab3c11713.jpg"
              alt=""
              className={style.image}
            />
          </div>
          <div className={style.container1}>
            <img
              src="https://i.pinimg.com/236x/66/78/ee/6678eeb92a30dea4db65f94bea7be646.jpg"
              alt=""
              className={style.image1}
            />
          </div>
        </div>
      </div>
      <div>
        {/* https://i.pinimg.com/236x/b7/88/c8/b788c83af16e0f5c08454d22e7d98620.jpg */}
        <h1 style={{ textAlign: "center", fontSize: "48px" }}>
          Use your {"  "}
          <span className={style.heart}>
            mask
            <FontAwesomeIcon icon={faHeart} className={style.rotateHeart} />
          </span>
          , <br /> save the <span className={style.world}>world</span>
        </h1>
        <div style={{ display: "flex" }}>
          <div className={style.container}>
            <img
              src="https://i.pinimg.com/236x/b7/88/c8/b788c83af16e0f5c08454d22e7d98620.jpg"
              alt=""
              className={style.image}
            />
          </div>
          <div className={style.container1}>
            <img
              src="https://i.pinimg.com/236x/a3/d2/af/a3d2af00f66a5bf7a633101f6071718a.jpg"
              alt=""
              className={style.image1}
            />
          </div>
        </div>
        <h3 style={{ textAlign: "center", color: "rgb(172, 171, 171)" }}>
          join against the virus with the movement of <br />
          using marks in all your social activities on earth
        </h3>
      </div>

      <Flex justifyContent="space-around" flexWrap="wrap">
        <Imagedisplay
          image={
            "https://i.pinimg.com/564x/40/07/bd/4007bd13b3a357102415f06f6d91458f.jpg"
          }
        />
        <Flex direction="column" className={style.drop}>
          
          <div className={style.scrollableinputcontainer}>
            <textarea
              className={style.scrollableinput}
              placeholder="Type your suggestion regarding masking here ..."
            />
          </div>
          <Button className={style.Button}>Join Now</Button>
        </Flex>
        {/* Use the StarIcon here */}
        <Imagedisplay
          image={
            "https://i.pinimg.com/564x/26/e5/bb/26e5bb6e5f845349b8278ba1fce7b1e0.jpg"
          }
        />
      </Flex>
      <Maskneed/>
      {/* <div className="home-container">
      <iframe
        src="https://www.youtube.com/embed/DeQkMK5LME4"
        className="home-iframe"
      ></iframe>
    </div> */}
    </div>
  );
}
export default Home;
