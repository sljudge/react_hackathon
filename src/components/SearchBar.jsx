import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const SearchBar = ( props ) => {
    const { setUrl, setLoadingStatus } = props;
    /* const [searchValues, setSearchValues] = useState( { origin: '', destination: '' } ); */

    const [originValue, setOriginValue] = useState( '' );
    const [destinationValue, setDestinationValue] = useState( '' );


    const handleInputChange = ( e ) => {
        const value = e.target.value;
        const id = e.target.id;

        if ( id === 'origin' ) setOriginValue( value );
        if ( id === 'destination' ) setDestinationValue( value );

        console.log( 'origin', originValue );
        console.log( 'destination', destinationValue );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log( 'submitted' );
        console.log( 'origin value', originValue );
        console.log( 'destination value', destinationValue );
        setUrl( `https://api.skypicker.com/flights?flyFrom=${originValue}&to=${destinationValue}&dateFrom=15/11/2019&dateTo=16/11/2019&partner=picky` );
    }

    return (
        <Form style={{ display: "flex", justifyContent: "center" }} onSubmit={handleSubmit}>
            <FormGroup style={{ margin: "0.5rem" }}>
                <Label for="origin">Origin:</Label>
                <select name="origin" id="origin" onChange={handleInputChange}>
                    <option value="VLC">Valencia</option>
                    <option value="BCN">Barcelona</option>
                    <option value="MAD">Madrid</option>
                    <option value="MXP">Milan</option>
                    <option value="ATH">Athens</option>
                    <option value="ZXCV">zxcv</option>
                </select>
            </FormGroup>
            <FormGroup style={{ margin: "0.5rem" }}>
                <Label for="destination">Destination:</Label>
                <select name="destination" id="destination" onChange={handleInputChange}>
                    <option value="PRG">Prague</option>
                    <option value="TXL">Berlin</option>
                    <option value="WAW">Warsaw</option>
                    <option value="PED">Pardubice</option>
                </select>
            </FormGroup>
            <Button color="success">Submit</Button>
        </Form>
    )
}

export default SearchBar;