const People = (props) => {
  return (
    <>
      <h1>{props.data.name}</h1>
      <h4>Gender:</h4>
      <p>{props.data.gender}</p>
      <h4>Birth Year:</h4>
      <p>{props.data.birth_year}</p>
      <h4>Mass:</h4>
      <p>{props.data.mass}</p>
      <h4>Height:</h4>
      <p>{props.data.height}</p>
      <h4>Eye Color:</h4>
      <p>{props.data.eye_color}</p>
    </>
  );
  // TODO: replace this
};

export default People;
