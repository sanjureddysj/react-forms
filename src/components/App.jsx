import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Hello");
  const [submit, setSubmit] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmitted() {
    setSubmit(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {submit} </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={handleSubmitted}> Submit</button>
    </div>
  );
}

export default App;
