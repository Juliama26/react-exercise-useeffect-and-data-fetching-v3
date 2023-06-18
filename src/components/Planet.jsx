const Planet = (props) => {
  return (
    <>
      <h1>{props.data.name}</h1>
      <h4>Rotation Period:</h4>
      <p>{props.data.rotation_period}</p>
      <h4>Orbital Period:</h4>
      <p>{props.data.orbital_period}</p>
      <h4>Terrain:</h4>
      <p>{props.data.terrain}</p>
      <h4>Population:</h4>
      <p>{props.data.population}</p>
      <h4>Climate:</h4>
      <p>{props.data.climate}</p>
    </>
  );
  // TODO: replace this
};

export default Planet;
