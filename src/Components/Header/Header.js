import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleLogOut = () =>{
        signOut(auth); 
    }
    return (
        <div className='container'>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">Home</Link>
                    <form className="d-flex"> 
                    {
                        user ? <Link onClick={handleLogOut} to='/'><button className="btn btn-outline-success" type="submit">Log out</button></Link> : <Link to='/login'><button className="btn btn-outline-success" type="submit">Login</button></Link>
                    }
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;