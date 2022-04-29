import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Inventory from './Inventory';
import Location from './Location';
import Reader from './Reader';
import './Home.css' 


const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    const slicedBook = books.slice(0,6); 
    console.log(slicedBook); 

    const navigate = useNavigate(); 
    const handleManageInventoryButton = () =>{
        navigate('/manageinvetory'); 
    }
    return (
        <div>
            <div className='container mt-4'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/jMkfnVv/laptop-computer-book-workplace-library-room.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='text-warning'>Books buyer doesn't become poor. </h3>
                            <p className='text'>I am not educated person but I can tell with confidence about that.</p>
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
                            <p className='text'>The more we read the more our knowledge will increase. Reading book is a good habit.</p>
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
                            <p className='text'>There is a few foe who loves to read book. The habit of reading book reduce our mantel pressure.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className='row d-flex justify-content-center mx-auto g-3 container mt-5'>
                <h1 className='d-flex justify-content-center text-primary'>Inventory Section</h1>
                {
                    slicedBook.map(book => <Inventory book={book} key={book._id}></Inventory>)
                }
            </div>
            <button onClick={handleManageInventoryButton} className="btn btn-outline-success w-75
            d-block mx-auto mt-4" type="submit">Manage Inventories</button>
            <Location></Location>
            <Reader></Reader>
        </div>
    );
};

export default Home;