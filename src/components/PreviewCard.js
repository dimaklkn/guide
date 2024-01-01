import React from "react";
import { useGlobalContext } from "../context";

const PreviewCard = (props) => {
  const { image, title, text } = props;
  const { setDescription } = useGlobalContext();

  return (
    <article
      className="previewcard"
      onClick={() => {
        setDescription(text);
      }}
    >
      <div className="previewcard__image">
        <img src={image} alt={title} />
      </div>
      <div className="previewcard__description">
        <p>{title}</p>
      </div>
    </article>
  );
};

export default PreviewCard;
