import { Flex } from "@chakra-ui/react";
import style from "./Home.module.css";
import image from "../Routes/Image/MaSk.jpg";
function Home() {
  return (
    <div className={style.container}>
          <img src={image} alt="" className={style.image} />
    <div className={style.box}></div>
 
  </div>
  );
}
export default Home;
