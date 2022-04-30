import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleLogOut = () =>{
        const confirm = window.confirm('Are you sure you want to log out?')
        if(confirm){
        signOut(auth);
    } 
    }
    return (
        <div className='container'>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">Home</Link>
                    <form className="d-flex"> 
                    

                    <Link className='me-3 ' to='/blog'><button className="btn btn-outline-success" type="submit">Blogs</button></Link>

                    {
                        user && <Link className='ms-3' to='/manageinvetory'><button className="btn btn-outline-success" type="submit">Manage Items</button></Link>
                    }

                    {
                        user && <Link className='ms-3' to='/addnewitem'><button className="btn btn-outline-success" type="submit">Add Item</button></Link>
                    }

                    {
                        user && <Link className='ms-3' to='/myitems'><button className="btn btn-outline-success" type="submit">My Item</button></Link>
                    }


                    {
                        user ? <Link onClick={handleLogOut} to='/'><button className="btn btn-outline-success ms-3" type="submit">Log out</button></Link> : <Link to='/login'><button className="btn btn-outline-success" type="submit">Login</button></Link>
                    }
                    
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;