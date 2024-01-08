import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Description = () => {
  const { picture, title, description } = useGlobalContext();
  return (
    <div className="description">
      <div className="description__picture has-fade fade-in">
        <img src={picture} alt={title} />
      </div>
      <div className="description__text has-fade fade-in">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to="/people">
          <button className="button">назад</button>
        </Link>
      </div>
    </div>
  );
};

export default Description;
