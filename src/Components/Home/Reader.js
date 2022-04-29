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
                        <p className='text'>I take the books from their ware house and read from long</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 container-fluid"
                        src="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/09/3e9610dc3fd629737cde62b9756fbcfe.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5 className='text-info'>A successful dealer of this Ware house. </h5>
                        <p className='text'>I love to be with this ware house since 2013. And I supply books their as much as they needed. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 container-fluid"
                        src="https://media.gettyimages.com/photos/smiling-businessman-with-brown-bag-walking-in-city-picture-id691910455?s=612x612"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5 className='text-info'>Let's have a great journey as a new dealer with smart book ware house. </h5>
                        <p className='text'>I wanted to be a book dealer since child hood. I am lucky to be a dealer with this ware house. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Reader;