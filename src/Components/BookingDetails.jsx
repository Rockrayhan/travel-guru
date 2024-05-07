import React, { useState, useEffect } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const BookingDetails = () => {
    const [myData, setMyData] = useState([]);
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    console.log(id);
    const idInt = parseInt(id);
    // console.log(idInt);
    // const data = useLoaderData();
    
    useEffect(() => {
        setLoading(true);
        fetch("/fakedata.json")
        .then((res) => res.json())
        .then((data) => {
            setMyData(data) 
        })
        .catch((err)=> {
            console.log(err.message);
        })
        .finally(()=> {
            setLoading(false)
        }) ;
        
      },[])

       const foundItem = myData.find((item) => item.id === idInt);
       console.log(foundItem);

       if(loading){
        return <div> Loading... </div>
       }

    return (
        <div className='container mt-5'>
            <h1 className='text-white'> Book for {foundItem?.name} </h1>
            <Link to={`/details/${id}`} className='text-white text-decoration-none'> Book Now </Link>
        </div>
    );
};

export default BookingDetails;