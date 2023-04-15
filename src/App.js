import React from 'react';
import axios from "axios";
import "./App.css";

function apiCall() {
  const openaiApiUrl = "https://api.openai.com/v1/completions";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer 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`,
  };

  const data = {
    model: "text-davinci-003",
    prompt: "sachintendulkar",
    max_tokens: 400,
    temperature: 1,
  };

  axios
    .post(openaiApiUrl, data, { headers })
    .then((response) => {
      console.log(response.data.choices[0]);
    })
    .catch((error) => {
      console.error(error);
    });
}


function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <h1>Essay Bot</h1>
      </div>

      <label style={{ color: "red", fontSize: "18px", textAlign: "left" }}>
        <b>Enter Your Topic</b>
      </label>
      <input
        id="inputtext"
        type="text"
        style={{ border: "1px solid black", padding: "5px", fontSize: "16px" }}
      />
      <button onClick={() => apiCall()}>Create Essay</button>
    </div>
  );
}

export default App;
