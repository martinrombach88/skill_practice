import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

//PSEUDO
//Data: JSON.stringify the data and put it in the box.

//Logs:
// API call should have logs to show on the portfolio.
// Use a Set to handle the logs and avoid the duplicates issue.

// const url = "http://localhost:8080/getwork/";

const url = prompt("Do you have an API url to make a call to?");

function App() {
  const [data, setData] = useState({ data: null });
  const [loaded, setLoaded] = useState(false);
  const [log, setLog] = useState(new Set());
  const [isLog, setIsLog] = useState(false);

  const fetchData = async () => {
    try {
      log.add(" Making call to API at: " + url + ". Awaiting response.");
      const result = await axios(url);
      log.add(" UseState prop sets data to object received from API.");

      log.add(" Data retrieved. ");

      setData(JSON.stringify(result.data));
      log.add(JSON.stringify(result.data));

      log.add(" Loaded set to true, website acts on data.");
      setLoaded(true);

      setIsLog(true);
    } catch (err) {
      return <div>{err}</div>;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App-header">
      <h3>API Caller</h3>
      <div className="Content">
        <h4>Your API</h4>
        <div className="Content_box">
          {loaded ? <p>{log}</p> : <p>Loading API data</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
