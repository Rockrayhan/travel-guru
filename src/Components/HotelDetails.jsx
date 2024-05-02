import React from 'react';
import { useParams } from 'react-router-dom';

const HotelDetails = () => {
    const {id} =  useParams() ;
    return (
        <div className='container'>
            <h1> see hotels for {id} </h1>
        </div>
    );
};

export default HotelDetails;