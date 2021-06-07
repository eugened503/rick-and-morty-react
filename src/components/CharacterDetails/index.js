import React, { useEffect, useState } from "react";
import { CHARACTERS } from "../../utils/constants/constants";
import Element from "../Element";

function CharacterDetails({ match }) {
  const { id } = match.params;
  const [data, setData] = useState("");
  const { image, location, species, gender, status, name, episode } = data;

  useEffect(() => {
    try {
      fetch(`${CHARACTERS}/${id}`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  let message;
  if (!data) {
    message = <div>'Loading...'</div>;
  }

  if (data) {
    message = (
      <div>
        <img alt={name} src={image} />
        <p>Имя: {name}</p>
        <p>Пол: {gender}</p>
        <p>Статус: {status}</p>
        <p>Вид: {species}</p>
        <p>Локация: {location.name}</p>
        <div className="episode">
          <p className="episodes">Эпизоды: </p>
          {episode.map((e, index) => (
            <Element
              className="episode__item"
              key={index}
              element={e}
              num={40}
              route={"episode"}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Номер персонажа: {id}</h2>
      <div>{message}</div>
    </div>
  );
}

export default CharacterDetails;
