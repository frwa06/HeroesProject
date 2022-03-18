import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export const Detail = () => {
  const heroe = useSelector((state) => state.heroe.heroe);
  const { heroeId } = useParams();

  const [heroeSelected, setHereoSelected] = useState(heroe[parseInt(heroeId)]);
  const navigate = useNavigate();
  const returnHome = () => {
    navigate("/home");
  };
  const handleChangeNickName = (event) => {
    const newHeroe = {
      ...heroeSelected,
      _nickname: event.target.value,
    };
    setHereoSelected(newHeroe);
  };
  const handleChangeName = (event) => {
    const newnHeroe = {
      ...heroeSelected,
      _name: event.target.value,
    };
    setHereoSelected(newnHeroe);
  };
  const [editing, setEditing] = useState(false);
  const edit = () => {
    setEditing(true);

  };
  const save = () =>{
    setEditing(false)
  };


  return (
    <div className="frame">
      <div className="detail">

        <span className="options">
          {editing ? <button className="detail2" onClick={save}>Guardar</button>:<div>
            <button className="detail1" onClick={edit}>
              Editar
            </button>
            <button className="detail1">Eliminar</button>
            <button className="detail1" onClick={returnHome}>
              Regresar
            </button>
          </div>}
        </span>
        <img srcSet={heroeSelected._picture} className="profile2" alt="" />
        {editing ? (
          <input
            className="title1"
            name="_nickname"
            value={heroeSelected._nickname}
            onChange={handleChangeNickName}
          />
        ) : (
          <h1 className="title1">{heroeSelected._nickname}</h1>
        )}
        <p className="paragraph1">Heroe</p>
        <div className="date">
          <div className="subtext">
            {editing ? (
              <input
                className="title2"
                name="_name"
                value={heroeSelected._name}
                onChange={handleChangeName}
              />
            ) : (
              <h1 className="title2">{heroeSelected._name}</h1>
            )}
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
