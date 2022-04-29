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
            <p>{description}</p>
            <p>{quantity}</p>
            <p>{supplierName}</p>
            <h3>$ <span>{price}</span></h3>
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