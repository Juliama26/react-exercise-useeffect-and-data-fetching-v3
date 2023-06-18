const Starship = (props) => {
  return (
    <>
      <h1>{props.data.name}</h1>
      <h4>Model:</h4>
      <p>{props.data.model}</p>
      <h4>Manufacturer:</h4>
      <p>{props.data.manufacturer}</p>
      <h4>Crew:</h4>
      <p>{props.data.crew}</p>
      <h4>Passengers:</h4>
      <p>{props.data.passengers}</p>
      <h4> Cargo Capacity:</h4>
      <p>{props.data.cargo_capacity}</p>
      <h4>Starship Class:</h4>
      <p>{props.data.starship_class}</p>
    </>
  );
  // TODO: replace this
};

export default Starship;
