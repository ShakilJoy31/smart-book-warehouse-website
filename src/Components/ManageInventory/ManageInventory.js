import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageInventory.css'; 
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const ManageInventory = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    const handleDeleteButton = id => {
        const confirm = window.confirm('Are you want to delete this item? '); 
        if(confirm){
            fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        const remaiiningBooks = books.filter(book => book._id !== id);
        setBooks(remaiiningBooks);
        toast('Item is deleted successfully'); 
        }

    }

    const navigate = useNavigate(); 
    const handleInsertInventoryButton = () =>{
        navigate('/addnewitem')
    }
    return (
        <div className='container d-block mx-auto row manage-inventory-responsive'>
            {
                <table class="table col-sm-12 col-md-12 col-lg-12">
                    <thead>
                        <tr>
                            <th scope="col">name</th>
                            <th scope="col">Picture</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>

                            <th scope="col">Quantity</th>

                            <th scope="col">Supplier</th>

                            <th scope="col">Sold</th>

                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        books.map(book =>
                            <tbody>
                                <tr>
                                    <th scope="row"><h6>{book.name}</h6></th>
                                    <td><span className='hide-initially'></span><img className='w-50' src={book.img} alt="" /></td>
                                    <td><p><span className='hide-initially'>Description: </span>{book.description}</p></td>
                                    <td><p><span className='hide-initially'>Price: </span>{book.price}</p></td>
                                    <td><p><span className='hide-initially'>Quantity: </span>{book.quantity}</p></td>
                                    <td><p><span className='hide-initially'>Supplier: </span>{book.supplierName}</p></td>
                                    <td><p><span className='hide-initially'>Sold: </span>{book.sold}</p></td>
                                    <button onClick={() => handleDeleteButton(book._id)} className="btn btn-outline-success
            d-block mx-auto mt-4" type="submit">Delete</button>
                                </tr>
                            </tbody>)
                    }
                </table>
            }

            <button onClick={handleInsertInventoryButton} className="btn btn-outline-success
            d-block mx-auto mt-4 w-75 fs-3" type="submit">Add New Item</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ManageInventory;