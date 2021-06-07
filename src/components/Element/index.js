import React from "react";
import { useHistory } from "react-router-dom";

function Element({ element, num, route }) {
    const history = useHistory();
    const str = element.slice(num);
    return (
      <p
        className="episode__item"
        onClick={() => history.push(`/${route}/${str}`)}
      >
        {str}
      </p>
    );
}

export default Element;