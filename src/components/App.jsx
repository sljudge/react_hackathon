import React, { useState } from "react";

const formStyle = { display: "flex", flexDirection: "column", height: '300px', width:  '300px', alignItems: 'space-between'}
const divStyle = { display: "flex", width:  '300px', justifyContent: 'space-between' }
const buttonStyle = { border: '1px solid blue', margin: '5px'}

const URL = 'https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod'
const App = props => {
  // Declare the proper variables for state using useState
  const [formInputs, setFormInputs] = useState({email: '', password: ''})
  const [error, setError] = useState()

  // Make the inputs 'controlled input' using the function below
  const handleTextValueChange = (e) => {
    console.log('id', e.target.id)
    console.log('value', e.target.value)
    setFormInputs({
      ...formInputs,
      [e.target.id]:e.target.value
    })
  };

  const handleSubmitClick = (e) => {
    e.preventDefault()
    // When the submit button is clicked, submit a POST request to the above URL
    // It will always return an error
    // Find the error message in the returned body and add the error message to the bottom of the form
    console.log('SUBMIT')
    fetch(URL, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: {...formInputs}
    })
      .then((response) => response.json())
      .then((response) => {
          console.log('res', response)
          if(response.error){
            setError(response.error)
          }
      })
      .catch((error) => {
          console.log('err', error)
        })
      }
      
  console.log('err', error)
  return (
    <form style={formStyle}>
      <div style={divStyle}>
        <p>Email</p>
        <input
          type="email"
          id="email"
          value={formInputs.email}
          onChange={handleTextValueChange}
        />
      </div>
      <div style={divStyle}>
        <p>Password</p>
        <input
          type="password"
          id="password"
          value={formInputs.password}
          onChange={handleTextValueChange}
        />
      </div>
      <button style={buttonStyle} onClick={handleSubmitClick}>Submit</button>
      {error && <p>{error.message}</p>}
    </form>
  );
};

export default App;