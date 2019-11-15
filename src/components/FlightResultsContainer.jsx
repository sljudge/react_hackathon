import React, { useEffect } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { DateTime } from 'luxon';

const FlightResultsContainer = ( props ) => {
    //console.log( 'props', props );
    const { flightData, loadingStatus } = props;

    //console.log( 'Flight results', flightData );

    let content

    console.log( 'loading status', loadingStatus );
    console.log( 'flight data', flightData.length );




    if ( !loadingStatus ) {
        //console.log( 'propsflightdata', flightData )
        content = flightData.map( ( elem, index ) => (
            <div style={{ margin: "1rem" }}>
                <Card>
                    <CardBody>
                        <CardTitle><strong>{elem.flyFrom} &rarr; {elem.flyTo}</strong></CardTitle>
                        <p>Dep: {DateTime.fromMillis( elem.dTime * 1000 ).toFormat( 'hh:mm' )}</p>
                        <p>Arr: {DateTime.fromMillis( elem.aTime * 1000 ).toFormat( 'hh:mm' )}</p>
                        <p>&euro; {elem.price},-</p>
                    </CardBody>
                </Card>
            </div>
        ) )
    } else if ( !flightData.length ) {
        content = 'No flights found';
    }

    return content;

}

export default FlightResultsContainer;