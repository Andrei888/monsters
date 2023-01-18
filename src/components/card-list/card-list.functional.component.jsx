import CardFunctional from "../card/card.functional.component";
import "./card-list.style.css";

const CardListFunctional = ({ monsters }) => {
  return (
    <div className="monster-list">
      {monsters.map((monster) => {
        return <CardFunctional key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardListFunctional;
