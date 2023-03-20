import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({ data: null });
  const [loaded, setLoaded] = useState(false);

  const options = {
    method: "GET",
    url: "https://swapi.dev/api/films/",
  };

  const fetchData = async () => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
        setLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <div className="Content">
          <div className="Content-box">
            {loaded ? JSON.stringify(data) : "No data"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
