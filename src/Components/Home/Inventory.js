import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'; 

const Inventory = (props) => {
    const {name, img, description, price, quantity, supplierName, _id} = props.book; 
    const navigate = useNavigate(); 

    const handleInventoryButton = id =>{
        navigate(`/inventory/${id}`); 
    }

    
    return (
        <div className='col-md-6 col-lg-4 col-12'>
            <div className='border border-primary rounded'>
            <img className='w-100 d-block mx-auto' src={img} alt="" />
            <div className='d-flex justify-content-center'>
            <div className='w-100'>
            <div className='ms-3 me-3'>
            <h1>{name}</h1>
            <p> <span className='aboutBook'>Description: </span>{description}</p>
            <p> <span className='aboutBook'>Quantity: </span>{quantity}</p>
            <p> <span className='aboutBook'>Supplier: </span>{supplierName}</p>
            <h3> <span className='aboutBook'>Price: </span>$<span>{price}</span></h3>
            </div>
            <button onClick={()=>handleInventoryButton(_id)} className="btn btn-outline-success w-100
            d-block" type="submit">Update</button>
            </div>
            </div>
            </div>

        </div>
    );
};

export default Inventory;