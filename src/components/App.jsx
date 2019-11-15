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
    try {
      callAPI();
    } catch ( err ) {
      console.error( err );
    }

    setLoading( false );

  }, [] );


  const callAPI = async () => {
    try {
      const result = await fetch( url )
      const data = await result.json()
      console.log( 'fetch data', data );
      setFlightList(
        data.data
      )
    } catch ( e ) {
      setFlightList( [] );
      console.error( 'call api', e );
    }


  }


  //console.log( flightList )

  const loadingStatus = 'Loading...';

  if ( !loading ) {
    content = flightList;
  }

  useEffect( () => {
    console.log( 'calling', url );
    callAPI();
  }, [url] )

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
