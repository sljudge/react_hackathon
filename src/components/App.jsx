import React, { useState, useEffect } from "react";
import { Switch, Router, Route } from 'react-router-dom';
import  history  from '../history';

import NavBar from './NavBar.jsx';

const App = props => {
  const [url, setUrl] = useState('https://api.skypicker.com/flights?flyFrom=PRG&to=VLC&dateFrom=15/11/2019&dateTo=16/11/2019&partner=picky')
  const [flightList, setFlightList ] = useState([])

  useEffect(() => {
    const callAPI = async () => {
      const result = await fetch(url)
      const data = await result.json()
      setFlightList({
        ...data.data
      })     
    }

    callAPI()

  }, [])


  console.log(flightList)
  return (
    <>
    <NavBar/>
    </>
  )
}

export default App;
