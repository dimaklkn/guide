import React from "react";
//import loader
import MyLoader from "../components/MyLoader";
import useLoader from "../customHooks";
//import data of people
import peopleData from "../data/peopleData";
//import components
import PreviewCard from "../components/PreviewCard";

const Artefacts = () => {
  const isLoading = useLoader(500);

  return (
    <>
      {isLoading ? (
        <MyLoader />
      ) : (
        <div className="container artefacts cards-container has-fade fade-in">
          {peopleData.map((card) => {
            return <PreviewCard {...card} key={card.id} />;
          })}
        </div>
      )}
    </>
  );
};

export default Artefacts;
