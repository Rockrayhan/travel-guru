import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import SingleHotel from './SingleHotel';
import Header from './Header';

const HotelDetails = () => {
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

       const hotelInfo =  foundItem?.hotel_info  ;
       console.log(hotelInfo);

       if(loading){
        return <div> Loading... </div>
       }
    
    
    
    return (
        <div className='container'>
            <Header/>
            <hr />
            <h1> see hotels for {foundItem?.name} </h1>


            <div className='container row'>
                <div className="col-lg-7">
                   
                {
                    hotelInfo?.map( item => <SingleHotel item={item}></SingleHotel> )
                }

                </div>
                <div className="col-lg-5">
                <iframe className='h-100 w-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.149145638285!2d91.97538907795027!3d21.42338192340444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc900455987dd%3A0xcf9c5385fe4534aa!2sSugondha%20point!5e0!3m2!1sen!2sbd!4v1715163155573!5m2!1sen!2sbd"  style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                </div>
            </div>
        </div>
    );
};

export default HotelDetails;