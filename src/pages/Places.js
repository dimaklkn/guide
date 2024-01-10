import React from "react";
//import loader
import MyLoader from "../components/MyLoader";
import useLoader from "../customHooks";

const Places = () => {
  const isLoading = useLoader(500);

  return (
    <>
      {isLoading ? (
        <MyLoader />
      ) : (
        <div className="container places cards-container has-fade fade-in"></div>
      )}
    </>
  );
};

export default Places;
