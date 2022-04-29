import React from 'react';

const Loadding = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loadding;