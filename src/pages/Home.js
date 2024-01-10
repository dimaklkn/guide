import React from "react";
//import loader
import useLoader from "../customHooks";

const Home = () => {
  const isLoading = useLoader(500);
  const isLoading2 = useLoader(550);
  return (
    <div className="hero has-fade fade-in">
      <div className="hero-text">
        {isLoading ? null : <h1 className="has-fade fade-in">г. Фурманов</h1>}
        {isLoading2 ? null : (
          <h2 className="has-fade fade-in">Виртуальная экскурсия</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
