import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import React from "react";

const SinglePlace = ({item}) => {

   

    return (
        <div className="col-lg-4">
                <Link to={`/booking/${item.id}`}>
                    <Card className="bg-dark text-white places-card">
                      <Card.Img src={item.img} alt="Card image" />
                      <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                        <Card.Title className="mt-auto">{item.name}</Card.Title>
                      </Card.ImgOverlay>
                    </Card>
                </Link>
              
        </div>
    );
};

export default SinglePlace;