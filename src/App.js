// TODO: answer here
import { useState, useEffect } from "react";
import People from "./components/People";
import Planet from "./components/Planet";
import Starship from "./components/Starship";

const App = () => {
  const [request, setRequest] = useState("people");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://swapi.py4e.com/api/${request}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.results);
        setResult(json.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [request]);
  return (
    <>
      <select value={request} onChange={(e) => setRequest(e.target.value)}>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {result.map((e, index) => {
            switch (request) {
              case "planets":
                return <Planet data={e} key={index} />;
              case "starships":
                return <Starship data={e} key={index} />;
              default:
                return <People data={e} key={index} />;
            }
          })}
        </div>
      )}
    </>
  ); // TODO: replace this
};

export default App;
