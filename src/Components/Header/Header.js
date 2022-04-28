import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">Home</Link>
                    <form className="d-flex"> 
                    <button className="btn btn-outline-success" type="submit">Login</button>
                            
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;