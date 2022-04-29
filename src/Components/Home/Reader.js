import React from 'react';
import { Carousel } from 'react-bootstrap';

const Reader = () => {
    return (
        <div className='container'>
            <h1 className='d-flex justify-content-center text-primary'>Some of our Dealer</h1>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 container-fluid"
                        src="https://jooinn.com/images/portrait-124.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 className='text-info'>It's a greate pleasure to be a Dealer.</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 container-fluid"
                        src="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/09/3e9610dc3fd629737cde62b9756fbcfe.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 container-fluid"
                        src="https://media.gettyimages.com/photos/smiling-businessman-with-brown-bag-walking-in-city-picture-id691910455?s=612x612"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Reader;