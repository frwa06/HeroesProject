import React from "react";
import { Segment40 } from "./Segment40";
import { Newsegment } from "./Newsegment";
import { useNavigate } from "react-router-dom";


export const Super =({Heroe,position}) => {
  
  const navigate = useNavigate();
  const goToDetail =()=>{
    navigate('/detail/'+ position);
  }  
  
  return (
    <div className="super">
      <button className="lookat" onClick={goToDetail}>
        <Segment40 srcImage={Heroe._picture} position={position + 1}></Segment40>
        <Newsegment
          superName={Heroe._nickname}
          realName={Heroe._name}
          stature={Heroe._heigth}
        ></Newsegment>
      </button>
    </div>
  )};