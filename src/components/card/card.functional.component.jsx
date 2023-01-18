const CardFunctional = ({ monster }) => {
  const { name, email, id } = monster;
  return (
    <div className="monster-item" key={id}>
      <div className="monster-item-container">
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`Monster ${name}`}
        />
        <h2>{name}</h2>
        <h3>{email}</h3>
      </div>
    </div>
  );
};

export default CardFunctional;
