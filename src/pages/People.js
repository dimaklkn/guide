//import data of people
import peopleData from "../data/peopleData";
//import components
import PreviewCard from "../components/PreviewCard";

const People = () => {
  return (
    <div className="container cards-container">
      {peopleData.map((card) => {
        return <PreviewCard {...card} key={card.id} />;
      })}
    </div>
  );
};

export default People;
