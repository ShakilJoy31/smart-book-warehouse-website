import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../firebase.init';

const AllInventory = () => {
    const { id } = useParams();
    const [book, setBook] = useState([]);
    const [user] = useAuthState(auth); 
    
    
    useEffect(() => {
        fetch(`https://protected-inlet-99734.herokuapp.com/particularBook/${id}`, {
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`, 
                email: user?.email 
            }
        })
            .then(res => res.json())
            .then(data => {
                setBook(data)
                console.log(data); 
            });
            
    }, [book?.quantity]);

    const [bookQuantity, setBookQuantity] = useState(100); 
    

    let quantity = parseInt(bookQuantity);
    const handleDeleveredButton = id => {
        quantity = parseInt(quantity - 1);
        const newQuantity = { quantity };
        console.log(quantity);
        fetch(`https://protected-inlet-99734.herokuapp.com/updateQuantity/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
            setBookQuantity(quantity); 
            console.log(bookQuantity); 
    }

    const handleRestock = event =>{
        event.preventDefault(); 
        const quantityInStock = parseInt(event.target.quantity.value); 
        const totalQuantity = quantity + quantityInStock; 
        console.log(totalQuantity); 
        const stockedQuantity = { totalQuantity }; 

        fetch(`https://protected-inlet-99734.herokuapp.com/stockedQuantity/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(stockedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
            setBookQuantity(totalQuantity); 
            console.log(bookQuantity); 
    }

    const navigate = useNavigate()
    const handleManageInventoryButton = () =>{
        navigate('/manageinvetory'); 
    }


    return (
        <div className='mt-4'>
            <div className='d-block mx-auto w-75'>
                <h1>Restock the item</h1>
            <form onSubmit={handleRestock}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Number of Quantity added</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" name='quantity' aria-describedby="emailHelp" required/> 
                </div>
                <button type="submit" class="btn btn-outline-success w-50 d-block mx-auto">Restock</button>
            </form>
            </div>



            <div className='d-flex justify-content-center mt-4'>
                <div className='col-md-6 col-lg-4 col-12'>
                    <div className='border border-primary rounded'>
                        <img className='w-100 d-block mx-auto' src={book.img} alt="" />
                        <div className='d-flex justify-content-center'>
                            <div className='w-100'>
                                <div className='ms-3 me-3'>
                                    <h1>{book.name}</h1>
                                    <p><span className='aboutBook'>Book Id: </span>{book._id}</p>
                                    <p><span className='aboutBook'>Description: </span>{book.description}</p>
                                   
                                    <p><span className='aboutBook'>Quantity: </span>{bookQuantity}</p>
                                    
                                    <p><span className='aboutBook'>Supplier: </span>{book.supplierName}</p>
                                    <h3><span className='aboutBook'>Price: </span>${book.price}</h3>
                                    <p><span className='aboutBook'>Sold: </span> {book.sold}</p>
                                </div>
                                <button onClick={() => handleDeleveredButton(book._id)} className="btn btn-outline-success w-100
            d-block" type="submit">Delivered</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleManageInventoryButton} className="btn btn-outline-success w-75
            d-block mx-auto mt-4" type="submit">Manage Inventories</button>
        </div>
    );
};

export default AllInventory;