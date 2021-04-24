import React from 'react';
import './Card.css';

function Card({ title, imageUrl, body }) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt='benchpress' height="200px" width="200px"/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{title}</h3>
                </div>
                <div className='card-body'>
                    <p>{body}</p>
                </div>
            </div>
            <div className='btn'>
                <button>
                    <a href="https://www.youtube.com/watch?v=SCVCLChPQFY">View Demonstration</a>
                </button>
            </div>
        </div>
    )
}

export default Card