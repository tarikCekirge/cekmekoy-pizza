import React from 'react'
import Pizza from './Pizza'
import { pizzaData } from '../pizzas/data'

const Menu = () => {
    console.log(pizzaData)
    return (
        <div className='menu'>
            <h2>Menü</h2>
            {pizzaData.length > 0 && (
                <ul className='pizzas'>
                    {pizzaData.map((item, i) => <Pizza key={i} {...item} />)}
                </ul>
            )}

        </div>
    )
}

export default Menu