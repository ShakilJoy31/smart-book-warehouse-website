import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <div className='container'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/jMkfnVv/laptop-computer-book-workplace-library-room.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='text-warning'>Books buyer doesn't become poor. </h3>
                            <p className=''>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/th97Rx5/book-library-with-open-textbook-1.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className='text-warning'>Read Books too enrich your knowledge</h3>
                            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/qmxHNgQ/book-library-with-open-textbook.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className='text-warning'>The person who reads book has few foe</h3>
                            <p className=''>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Home;