import React from "react";
import { Button, position,useMediaQuery } from "@chakra-ui/react";
import style from "./MaskneedPagination.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
const MaskneedPagination = ({ currentPage,totalpage, onNext, onPrev,onchangecircle }) => {
    console.log(currentPage)
    const arr=new Array(totalpage).fill(0)
    const [isLargerThan768] = useMediaQuery("(max-width: 768px)");
  return (
    <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        <div className={style.arr} style={{display:isLargerThan768?"none":"block"}}>
        {
            arr?.map((el,index)=><Button key={index} className={index+1===currentPage?`${style.isactive}`:`${style.arrbutton}`} onClick={()=>onchangecircle(index+1)}><FontAwesomeIcon icon={faCircle} 
            className={style.cirlebutton} /></Button>)
        }
        </div>
        <div className={style.buttonarrow}>
      <Button onClick={onPrev} isDisabled={currentPage === 1} colorScheme="blue"  className={currentPage === 1?`${style.arrowdisable}`:`${style.arrowleft}`}>
     <span>&#8592;</span> 
      </Button>
      <Button
        onClick={onNext}
        isDisabled={currentPage === totalpage}
       
        ml={2}
       
        className={currentPage === totalpage?`${style.arrowdisable}`:`${style.arrowright}`}
      >
         <span >&#8594;</span>
      </Button>
      </div>
    </div>
  );
};

export default MaskneedPagination;
