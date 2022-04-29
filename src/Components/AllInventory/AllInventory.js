import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AllInventory = () => {
    const { id } = useParams();
    const [book, setBook] = useState([]);
    const [bookQuantity, setBookQuantity] = useState(100); 
    
    useEffect(() => {
        fetch(`http://localhost:5000/particularBook/${id}`)
            .then(res => res.json())
            .then(data => setBook(data));
    }, []);

    

    let quantity = parseInt(bookQuantity);
    const handleDeleveredButton = id => {
        quantity = parseInt(quantity - 1);
        const newQuantity = { quantity };
        console.log(quantity);
        fetch(`http://localhost:5000/updateQuantity/${id}`, {
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

        fetch(`http://localhost:5000/stockedQuantity/${id}`, {
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
                                    <p>{book.description}</p>
                                    
                                        <p>{bookQuantity}</p>
                                    
                                    <p>{book.supplierName}</p>
                                    <h3>$ <span>{book.price}</span></h3>
                                    <h3>Sold: <span>{book.sold}</span></h3>
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