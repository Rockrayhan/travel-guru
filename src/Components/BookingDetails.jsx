import React, { useState, useEffect } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const BookingDetails = () => {
    const [myData, setMyData] = useState([]);
    const { id } = useParams();
    console.log(id);
    // const data = useLoaderData();
    // console.log(data);
    const idInt = parseInt(id);
    const [item, setItem] = useState(null);

    // useEffect(() => {
    //     // Check if data is available and is an array
    //     if (Array.isArray(data) && data.length > 0) {
    //         const foundItem = data.find((job) => job.id === idInt);
    //         setItem(foundItem);
    //     }
    // }, [data, idInt]);
    useEffect(() => {
        fetch("fakedata.json")
        .then(response => response.json())
        .then(data => console.log(data)) 
      },[])

       const foundItem = myData.find((job) => job.id === idInt);
       console.log(foundItem);

    // Render loading indicator while item is being fetched
    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className='text-white'> Book for {item.name} </h1>
            {/* Add your other content here */}
        </div>
    );
};

export default BookingDetails;