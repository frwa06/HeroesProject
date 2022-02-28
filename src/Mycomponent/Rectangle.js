import { Super } from "./Super";
//import { useState, useEffect } from "react";
//import { increment } from "../Features/counter/HeroeSlice";
import { useSelector } from "react-redux";

export const Rectangle = () => {
  const heroe= useSelector((state) => state.heroe.heroe)

  /*const [Heroe, setHeroe] = useState([]);

  useEffect(() => {
    fetch("https://udem.herokuapp.com/heroes", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((heroes) => {
        setHeroe(heroes);
      });
  }, []);*/

  return (
    <div className="rectangle">
      {heroe.map((h, index)=> <Super position={++index} key={index} Heroe={h}></Super>)}
    </div>
    
    );

  
};

