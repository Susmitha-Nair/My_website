import React from 'react';
import "./Card.css";

const Card = ({emoji,headline, details}) =>{
    return(
        <div className='card'>
            <img src={emoji} alt=''/>
            <span>
                {headline}
            </span>
            <span>
                {details}
            </span>
            <button className='c-button'>Learn More</button>
        </div>
    )
}

export default Card