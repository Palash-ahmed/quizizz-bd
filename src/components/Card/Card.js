import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({topic}) => {
    const {id, logo, name} = topic;
    return (
        <div className='card-container'>
            <img src={logo} alt="" />
            <div className='card-button'>
            <h4>{name}</h4>
            <button className='btn'> <Link to = {`/topic/${id}`}>Start Practice</Link></button>
            </div>
        </div>
    );
};

export default Card;