import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movieName, smovieName] = useState("");
  const [movieReview, smovieReview] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3001/api/get").then((data) => {
      console.log(data);
    });
  }, []);
  const submit = () => {
    axios
      .post("http://localhost:3001/api/insert", {
        movieName: movieName,
        movieReview: movieReview,
      })
      .then(() => {
        alert("successful");
      });
  };
  const so = () => {
    console.log("double click not alowed");
  };
  return (
    <div className="App">
      <h1>Movie Review</h1>
      <div className="form">
        <input
          type="text"
          className="ip1"
          placeholder="Movie Name"
          onChange={(e) => {
            smovieName(e.target.value);
          }}
        />
        <textarea
          type="text"
          className="ip2"
          placeholder="Reviews"
          onChange={(e) => {
            smovieReview(e.target.value);
          }}
        ></textarea>
        <button onClick={submit} onDoubleClick={so}>
          submit
        </button>
      </div>
    </div>
  );
}

export default App;
