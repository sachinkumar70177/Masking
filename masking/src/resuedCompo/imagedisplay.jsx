
import style from "./Imagedisplay.module.css";
function Imagedisplay(props) {
    console.log(props)
  return (
    <div className={style.container}>
          <img src={props.image} alt="" className={style.image} />
    <div className={style.box} ></div>
 
  </div>
  );
}
export default Imagedisplay;
