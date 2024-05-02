import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';


const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div className='container'>
          <Container className='row text-white'>
            <div className='col-lg-6'>
                <h1> Travel Guru </h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque voluptas quasi sint iure, consequatur repudiandae modi praesentium ex voluptates harum, adipisci culpa sed cum officia distinctio vel quo placeat. </p>
            </div>
            <div className='col-lg-6'>
                <div className="row">
                {
                    data.map( item => <div className='col-lg-4'>  <Link to={`/booking/${item.id}`}> <h3> {item.name} </h3> </Link>
                    </div> )
                }
                </div>
            </div>
          </Container>
        </div>
    );
};

export default Home;