import React, { useState } from "react";

function EssayForm() {
  const [essays, setEssays] = useState([
    {
      id: 1,
      essayName: "",
      essayQuestion: "",
      essayAnswer: "",
    },
  ]);

  const addEssay = () => {
    const newEssay = {
      id: essays.length + 1,
      essayName: "",
      essayQuestion: "",
      essayAnswer: "",
    };
    setEssays((prevState) => [...prevState, newEssay]);
  };

  const handleEssayChange = (event, index) => {
    const { name, value } = event.target;
    setEssays((prevState) => {
      const newState = [...prevState];
      newState[index] = { ...newState[index], [name]: value };
      return newState;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(essays);
    // Code to submit the form data goes here
  };

  return (
    <div>
      <h1>Essay Form</h1>
      <form onSubmit={handleSubmit}>

        {essays.map((essay, index) => (
          <div key={essay.id}>
            <h2>Essay {index + 1}</h2>
            <label>
              Essay Name:
              <input
                type="text"
                name="essayName"
                value={essay.essayName}
                onChange={(e) => handleEssayChange(e, index)}
              />
            </label>
            <label>
              Essay Question:
              <textarea
                name="essayQuestion"
                value={essay.essayQuestion}
                onChange={(e) => handleEssayChange(e, index)}
              />
            </label>
            <label>
              Essay Answer:
              <textarea
                name="essayAnswer"
                value={essay.essayAnswer}
                onChange={(e) => handleEssayChange(e, index)}
              />
            </label>
          </div>
        ))}

        
        <button type="button" onClick={addEssay}>
          Add Essay
        </button>
        <button type="submit">Submit</button>


      </form>
    </div>
  );
}

export default EssayForm;
