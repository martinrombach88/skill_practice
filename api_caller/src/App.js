import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

//PSEUDO

//Data: JSON.stringify the data and put it in the box.
//Logs:
// API call should have logs to show on the portfolio.
// Use a Set to handle the logs and avoid the duplicates issue.

// const url = "http://localhost:8080/getwork/";
const url = prompt("Do you have an open API url to make a call to?");

//How can you handle API keys?

function App() {
  const [loaded, setLoaded] = useState(false);
  const [log, setLog] = useState(new Set());
  const [isLog, setIsLog] = useState(false);

  //If you use this syntax, you can add headers and API keys into the options object
  const options = {
    method: "GET",
    url: url,
  };

  const fetchAxios = async () => {
    await axios
      .request(options)
      .then(function (response) {
        log.add(" Making call to API at: " + url + ". \nAwaiting response.");
        log.add(
          "\nData retrieved. Stringifying and adding to Set. Displaying full log via JSX dynamic variable. \n"
        );
        log.add("\n" + JSON.stringify(response.data));
        setLoaded(true);
        log.add(" Loaded set to true, website acting on data.");
        setIsLog(true);
        console.log(log);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchAxios();
  }, []);

  return (
    <div className="App-header">
      <h3>API Caller</h3>
      <div className="Content">
        <h4>Your API</h4>
        <div className="Content_box">
          {loaded ? <p>{log}</p> : <p>No data found at {url}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
