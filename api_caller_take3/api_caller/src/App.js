import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({ data: null });
  const [loaded, setLoaded] = useState(false);

  //https://swapi.dev/api/films/
  const options = {
    method: "GET",
    url: "https://swapi.dev/api/films/",
  };
  const fetchData = async () => {
    await axios
      .request(options)
      .then(function (response) {
        setData(response);
        setLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //useEffect
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <div className="Content">
          <h3>API Caller</h3>
          <div className="Content-box">
            <p>{loaded ? JSON.stringify(data) : "No data"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
