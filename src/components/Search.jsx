import React, {useState}  from "react";

const App = props => {
  const [formInputValues, setFormInputValues] = useState({name: '', email: '', password: '', subscribe: false})

  const handleFormTextChange = e => {
    const val = e.target.value
    const id = e.target.id
    setFormInputValues(prevValues => {
      return {
        ...prevValues,
        [id]: val
      }
    })
    console.log(formInputValues)
  }

  const handleFormCheckboxChange = e => {
    const val = e.target.value
    const id = e.target.id
    console.log(val, id)
    setFormInputValues(prevValues => {
      return {
        ...prevValues,
        [id]: !val
      }
    })
    console.log('checkBox change ', formInputValues)
  }

  const handleSubmitButtonClick = (e) => {
    e.preventDefault()
    console.log('clicked')
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column'}}>
      <input
        id="name" 
        type="text"
        value={formInputValues.name}
        onChange={handleFormTextChange}
      />
      <input
        id="email" 
        type="email"
        value={formInputValues.email}
        onChange={handleFormTextChange}
      />
      <input
        id="password" 
        type="password"
        value={formInputValues.password}
        onChange={handleFormTextChange}
      />
      <input
        id="subscribe" 
        type="checkbox"
        value={formInputValues.subscribe}
        onChange={handleFormCheckboxChange}
      />
      <button onClick={handleSubmitButtonClick} style={{border: '1px solid blue', margin: '5px'}}>Submit</button>
    </form>
  );
};

export default App;
