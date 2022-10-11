import React from 'react';
import './Card.css'

const Card = ({topic}) => {
    const {logo, name} = topic;
    return (
        <div className='card-container'>
            <img src={logo} alt="" />
            <div className='card-button'>
            <h4>{name}</h4>
            <button>Start Practice</button>
            </div>
        </div>
    );
};

export default Card;