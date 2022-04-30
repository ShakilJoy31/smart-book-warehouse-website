import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loadding from '../Loadding';
import './MyItems.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const MyItems = () => {
    const [user, loading] = useAuthState(auth);
    const [myBooks, setMyBooks] = useState([]);

    useEffect(() => {
        fetch('https://protected-inlet-99734.herokuapp.com/addBook', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                email: user?.email
            }
        })
            .then(res => res.json())
            .then(data => {
                const myAddedBook = data.filter(book => book.email === user.email);
                setMyBooks(myAddedBook);
            });
    }, [])


    const handleDeleteButton = id => {
        const confirm = window.confirm('Are you sure you want to delete this? ')
        if (confirm) {
            fetch(`https://protected-inlet-99734.herokuapp.com/deleteSpecificBook/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const afterDelete = myBooks.filter(book => book._id !== id);
                    setMyBooks(afterDelete);
                })
            toast('Item is deleted successfully.');
        }
    }
    if (loading) {
        return <Loadding></Loadding>
    }



    return (
        <div className='mt-5 forheight'>
            <h1 className='d-flex justify-content-center text-primary'>The books you have added is being showed here</h1>
            {
                <div className='ms-5 me-5'>
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
                            myBooks.map(book =>
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
                </div>
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyItems;