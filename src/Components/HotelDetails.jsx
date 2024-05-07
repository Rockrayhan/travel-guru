import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const HotelDetails = () => {
    const {id} =  useParams() ;
    const places = useLoaderData();
    console.log(places);
    const place = places
    return (
        <div className='container text-white'>
            <h1> see hotels for {id} </h1>
        </div>
    );
};

export default HotelDetails;