import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import axios from "axios";
import "./App.css";

function App() {

  const [value, setValue] = useState('');
  const [output, setOutput] = useState('');

  function generateEssay() {
    const openaiApiUrl = "https://api.openai.com/v1/completions";

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
    };

    const data = {
      model: "text-davinci-003",
      prompt: value,
      max_tokens: 400,
      temperature: 1,
    };

    axios
      .post(openaiApiUrl, data, { headers })
      .then((response) => {
        setOutput(response.data.choices[0]);
        console.log(response.data.choices[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="App">
      <div className='App-header m-2'>
        <h1>Essay Bot</h1>
      </div>
      <h3>Write better essays, in less time, with your AI writing assistant</h3>
      <div className='input'>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText placeholder="Enter your title" value={value} onChange={(e) => setValue(e.target.value)} style={{ minWidth: "500px" }} />
        </span>
        <Button className="ml-2" label="Start Writing" onClick={() => generateEssay()} />
      </div>
      <div className='output'>
        <InputTextarea className="overflow-auto text-lg m-4" value={output} onChange={(e) => setOutput(e.target.value)} rows={20} cols={30} style={{ minWidth: "75%", maxWidth: "75%" }} />
      </div>
    </div>
  );
}

export default App;
