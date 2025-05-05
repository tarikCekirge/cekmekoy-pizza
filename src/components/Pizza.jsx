import React from 'react'

const Pizza = ({ name, ingredients, photoName }) => {
    return (
        <li className='pizza'>
            <img src={`/${photoName}`} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{ingredients}</p>
            </div>
        </li>
    );

}

export default Pizza