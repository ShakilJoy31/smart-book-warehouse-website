import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    const handleDeleteButton = id => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        const remaiiningBooks = books.filter(book => book._id !== id);
        setBooks(remaiiningBooks);

    }

    const navigate = useNavigate(); 
    const handleInsertInventoryButton = () =>{
        navigate('/addnewitem')
    }
    return (
        <div className='container-fluid'>
            {
                <table class="table">
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
                                    <th scope="row"><h5>{book.name}</h5></th>
                                    <td><img className='container-fluid w-50' src={book.img} alt="" /></td>
                                    <td><p>{book.description}</p></td>
                                    <td><p>{book.price}</p></td>
                                    <td><p>{book.quantity}</p></td>
                                    <td><p>{book.supplier}</p></td>
                                    <td><p>{book.sold}</p></td>
                                    <button onClick={() => handleDeleteButton(book._id)} className="btn btn-outline-success
            d-block mx-auto mt-4" type="submit">Delete</button>
                                </tr>
                            </tbody>)
                    }
                </table>
            }

            <button onClick={handleInsertInventoryButton} className="btn btn-outline-success
            d-block mx-auto mt-4 w-75 fs-3" type="submit">Insert a New Book Collection to the Ware house</button>
        </div>
    );
};

export default ManageInventory;