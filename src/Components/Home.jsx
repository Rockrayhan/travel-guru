import React from "react";
import { Container } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div className="container mt-5">
      <Container className="row text-white">
        <div className="col-lg-5 banner-left">
          <h1> Travel Guru </h1>
          <p>
            Travel as long as your pockekt is full with travel guru. Book your desired place, see the in located hotels near your location and make plans with your friends and family.
          </p>
        </div>
        <div className="col-lg-7">
          <div className="row">
            {data.map((item) => (
              <div className="col-lg-4" key={item.id}>
                <Link to={`/booking/${item.id}`}>
                  <div >
                    <Card className="bg-dark text-white places-card">
                      <Card.Img src={item.img} alt="Card image" />
                      <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                        <Card.Title className="mt-auto">{item.name}</Card.Title>
                      </Card.ImgOverlay>
                    </Card>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
