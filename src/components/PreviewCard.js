import React from "react";

const PreviewCard = (props) => {
  const { image, description } = props;

  return (
    <article className="previewcard">
      <div className="previewcard__image">
        <img src={image} alt={description} />
      </div>
      <div className="previewcard__description">
        <p>{description}</p>
      </div>
    </article>
  );
};

export default PreviewCard;
