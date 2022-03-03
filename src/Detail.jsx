import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";



export const Detail = () => {
  const heroe= useSelector((state) => state.heroe.heroe);
  const {heroeId} = useParams();
  const heroeSelected = heroe[parseInt(heroeId)];
  
  const navigate = useNavigate();
  const returnHome = () => {
    navigate("/home");
  };
  return (
    <div className="frame">
      <div className="detail">
        <span className="options">
          <button className="detail1">Editar</button>
          <button className="detail1">Eliminar</button>
          <button className="detail1" onClick={returnHome}>
            Regresar
          </button>
        </span>
        <img
          srcSet={heroeSelected._picture}
          className="profile2"
          alt=""
        />
        <h1 className="title1">{heroeSelected._nickname}</h1>
        <p className="paragraph1">Heroe</p>
        <div className="date">
          <div className="subtext">
            <h1 className="title2">{heroeSelected._name}</h1>
            <p className="paragraph2">Nombre</p>
          </div>
          <div className="subtext">
            <h1 className="title2">{heroeSelected._height}</h1>
            <p className="paragraph2">Estatura</p>
          </div>
        </div>
      </div>
    </div>
  );
};