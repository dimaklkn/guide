import React from "react";
//import loader

import useLoader from "../customHooks";
//import data of people
import peopleData from "../data/peopleData";
//import components
import PreviewCard from "../components/PreviewCard";

const People = () => {
  const isLoading = useLoader(500);
  return (
    <div className="container cards-container">
      {peopleData.map((card) => {
        return <PreviewCard {...card} key={card.id} />;
      })}
    </div>
  );
};

export default People;
