import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AllInventory = () => {
    const {id} = useParams(); 
    const [book, setBook] = useState([]); 
    useEffect(()=>{
        fetch(`http://localhost:5000/particularBook/${id}`)
        .then(res => res.json())
        .then(data => setBook(data)); 
    },[]); 

    const handleDeleveredButton = id =>{
        console.log('delevered ',id); 
    }
    console.log(book); 
    return (
        <div className='d-flex justify-content-center mt-4'>
            <div className='col-md-6 col-lg-4 col-12'>
            <div className='border border-primary rounded'>
            <img className='w-100 d-block mx-auto' src={book.img} alt="" />
            <div className='d-flex justify-content-center'>
            <div className='w-100'>
            <div className='ms-3 me-3'>
            <h1>{book.name}</h1>
            <p>{book.description}</p>
            <p>{book.quantity}</p>
            <p>{book.supplierName}</p>
            <h3>$ <span>{book.price}</span></h3>
            <h3>Sold: <span>{book.sold}</span></h3>
            </div>
            <button onClick={()=>handleDeleveredButton(book._id)} className="btn btn-outline-success w-100
            d-block" type="submit">Delivered</button>
            </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default AllInventory;