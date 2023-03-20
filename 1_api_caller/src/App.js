import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

//If npm start doesn't work,
//check you aren't in a parent folder

function App() {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  //https://swapi.dev/api/films/
  // const url = prompt("Enter a Open API url to see the data.");
  //if you use an object, you
  //can add headers and api keys easily
  const options = {
    method: "GET",
    url: "https://swapi.dev/api/films/",
  };

  //Why an arrow function?
  const fetchData = async () => {
    await axios
      .request(options)
      .then(function (response) {
        setData(response.data);
        setLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <h4>API Caller</h4>
        <div className="Content">
          <p>{loaded ? JSON.stringify(data) : "No data"}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
