import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants/constants";
import Element from "../Element";

function LocationDetails({ match }) {
  const { id } = match.params;
  const [data, setData] = useState("");
  const { name, type, residents } = data;

  useEffect(() => {
    try {
      fetch(`${BASE_URL}/location/${id}`)
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
        <p>Название локации: {name}</p>
        <p>Тип: {type}</p>

        <div className="episode">
          <p className="episodes">Персонажи: </p>{" "}
          {residents.map((e, index) => (
            <Element
              className="episode__item"
              key={index}
              element={e}
              num={42}
              route={"characters"}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Номер локации: {id}</h2>
      {message}
    </div>
  );
}

export default LocationDetails;
