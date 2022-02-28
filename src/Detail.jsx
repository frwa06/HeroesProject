import React from "react";
import { useNavigate } from "react-router-dom";

export const Detail = () => {
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
          srcSet="http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg"
          className="profile2"
          alt=""
        />
        <h1 className="title1">Iron Man</h1>
        <p className="paragraph1">Heroe</p>
        <div className="date">
          <div className="subtext">
            <h1 className="title2">Tony Starr</h1>
            <p className="paragraph2">Nombre</p>
          </div>
          <div className="subtext">
            <h1 className="title2">1.55</h1>
            <p className="paragraph2">Estatura</p>
          </div>
        </div>
      </div>
    </div>
  );
};
