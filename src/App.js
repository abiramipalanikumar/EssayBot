import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function App() {

  const [value, setValue] = useState('');
  const [output, setOutput] = useState('');

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const generateEssay = async () => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: value, // Input for openai
      temperature: 1,
      max_tokens: 400,
    });
    console.log(response);
    setOutput(response.data.choices[0]);
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
