import React, { useState, useEffect } from "react";
import { Switch, Router, Route } from 'react-router-dom';
import history from '../history';

import NavBar from './NavBar.jsx';
import FlightResultsContainer from './FlightResultsContainer.jsx';
import SearchBar from './SearchBar.jsx';

const App = props => {
  const [url, setUrl] = useState( 'https://api.skypicker.com/flights?flyFrom=PRG&to=VLC&dateFrom=15/11/2019&dateTo=16/11/2019&partner=picky' )
  const [flightList, setFlightList] = useState( [] )
  const [loading, setLoading] = useState( true )
  const [error, setError] = useState( '' )

  useEffect( () => {
    /* const callAPI = async () => {
      const result = await fetch( url )
      const data = await result.json()
      setFlightList(
        data.data
      )
    } */

    try {
      callAPI();
    } catch ( err ) {
      console.error( err );
    }

    setLoading( false );

  }, [] );



  const callAPI = async () => {
    const result = await fetch( url )
    const data = await result.json()
    setFlightList(
      data.data
    )

    if ( data.error ) {
      setError( data.error.message )
        .catch( err => {
          console.log( err )
        } )
    }
  }


  //console.log( flightList )

  let loadingStatus = 'Loading...';

  if ( !loading ) {
    content = flightList;
  }

  useState( () => {
  }, [flightList] )

  return (
    <>

      <NavBar />

      <SearchBar setUrl={setUrl} />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <FlightResultsContainer
          flightData={content}
          loadingStatus={loading}

        />
      </div>

      {loadingStatus && <h2>Loading ...</h2>}


    </>
  )
}

export default App;
