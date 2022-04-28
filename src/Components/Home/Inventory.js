import React from 'react';

const Inventory = (props) => {
    const {name, img} = props.book; 
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default Inventory;