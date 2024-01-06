import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const PreviewCard = (props) => {
  const { image, title, text, id } = props;
  const { setDescription, setTitle, setPicture } = useGlobalContext();

  return (
    <article
      className="previewcard"
      onClick={() => {
        setDescription(text);
        setTitle(title);
        setPicture(image);
      }}
    >
      <Link to={`/people/${id}`}>
        <div className="previewcard__image">
          <img src={image} alt={title} />
        </div>
        <div className="previewcard__description">
          <p>{title}</p>
        </div>
      </Link>
    </article>
  );
};

export default PreviewCard;
