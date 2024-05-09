import React from 'react';

const SingleHotel = ({item}) => {
    console.log(item);
    return (
        <div className='row mt-5'>
            <div className="col-lg-5">
                <img className='rounded-3'  style={{height:'150px', width:'250px'}} src={item.hotel_img} alt="" />
            </div>
            <div className="col-lg-7">
                <h3>
                    {item.hotel_name}
                </h3>
                <p>{ item.desc }</p>

                <p> Rating: {item.rating} </p>
            </div>
        </div>
    );
};

export default SingleHotel;