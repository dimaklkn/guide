import React from "react";
import { useState, useEffect } from "react";
//import loader
import MyLoader from "../components/MyLoader";
//import data of people
import peopleData from "../data/peopleData";
//import components
import PreviewCard from "../components/PreviewCard";

const People = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {isLoading ? (
        <MyLoader />
      ) : (
        <div className="container cards-container has-fade fade-in">
          {peopleData.map((card) => {
            return <PreviewCard {...card} key={card.id} />;
          })}
        </div>
      )}
    </>
  );
};

export default People;
