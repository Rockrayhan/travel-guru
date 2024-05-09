import React, { useState, useEffect } from 'react';
import { Link,  useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const BookingDetails = () => {
    const [myData, setMyData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    console.log(id);
    const idInt = parseInt(id);
    // console.log(idInt);
    // const data = useLoaderData();
    const {user, logOut} = useContext(AuthContext) ;
    
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
            <div className="row">
            <div className="col-lg-6 text-white ">
            <h1> Book for {foundItem?.name} </h1>
             <p>
                {foundItem?.desc}
             </p>
            </div>

            <div className="col-lg-6 text-white"> 
            <Form className='w-75 booking-form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Origin</Form.Label>
        <Form.Control type="email" placeholder="Dhaka" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Destination</Form.Label>
        <Form.Control type="password" placeholder={foundItem?.name} />
      </Form.Group>

    <div className='d-flex gap-5'>
    <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>From</Form.Label>
        <Form.Control type="date"  />
      </Form.Group>

      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>To</Form.Label>
        <Form.Control type="date"  />
      </Form.Group>
    </div>
      <div className='d-flex justify-content-center my-2'>
      <Button className={`w-75 p-2 ${user ? 'btn btn-danger' : 'btn btn-warning' } `}  type="submit">
            <Link to={`/details/${id}`} className='text-black fw-bold text-decoration-none'> Book Now </Link>
      </Button>
      </div>
    </Form>

             </div>

            </div>
            
        </div>
    );
};

export default BookingDetails;