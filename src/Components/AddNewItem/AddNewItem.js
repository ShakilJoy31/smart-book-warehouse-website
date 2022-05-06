import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import './AddNewItem.css'; 
import './AddNewItem.css'; 
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const AddNewItem = () => {
    const [user] = useAuthState(auth); 

    const handleOnSubmit = event => {
        event.preventDefault(); 
        const name = event.target.name.value; 
        const img = event.target.img.value; 
        const description = event.target.description.value; 
        const price = event.target.price.value; 
        const quantity = event.target.quantity.value; 
        const supplierName = event.target.supplier.value; 
        const sold = Math.round(Math.random() * 100);
        const email = user.email; 
        const bookData = { name, img, description, price, quantity, supplierName, sold, email}; 

        fetch('http://localhost:5000/addBook', {
            method: 'POST', 
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(bookData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data); 
        })
        
        toast('A new book collection is added to the database.'); 

        event.target.name.value = ''; 
        event.target.img.value = '';
        event.target.description.value = '';
        event.target.price.value = '';
        event.target.quantity.value = '';
        event.target.supplier.value = '';
    }
    return (
        <div className='forHeight'>
            <div className='d-flex justify-content-center'>
                <div className='border border-success rounded mt-4 pb-4 pt-4 w-75 d-block'>
                    <h1 className='text-success ms-2'>Add a New Item to Warehouse</h1>
                    <div className='w-100 ms-2'>
                        <form onSubmit={handleOnSubmit}>
                            <input placeholder='Books Name' className='w-75 input input-border mt-2 p-2' type="text" name='name' required />
                            <br />

                            <input placeholder='Cover Photo of the Book' className='w-75 input input-border mt-3 p-2' type="text" name='img' required />
                            <br />

                            <input placeholder='Description of this book' className='w-75 input input-border mt-3 p-2' type="text" name='description' required />
                            <br />

                            <input placeholder='Price' className='w-75 input input-border mt-3 p-2' type="text" name='price' required />
                            <br />

                            <input placeholder='Quantity' className='w-75 input input-border mt-3 p-2' type="text" name='quantity' required />

                            <input placeholder='Supplier of this book' className='w-75 input input-border mt-3 p-2' type="text" name='supplier' required />


                            <input type="submit" value="Register" className='d-block mt-4 w-75 mx-auto btn btn-outline-success' required />
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddNewItem;