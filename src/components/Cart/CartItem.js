import { useState } from 'react'
import coconut from '../../assets/coconut.svg'

import './Cart.scss'

const CartItem = ({ name, price, qty }) => {

    const [quantity, setQuantity] = useState(qty || 0)

    return (
        <div className='cart_item'>
            <div className="img">
                <img src={coconut} alt="coconut" />
            </div>
            <div className="info">
                <h3>{name.length > 13 ? (name.substring(0, 13) + '...') : name}</h3>
                <h4>${price}</h4>
            </div>
            <div className="qty">
                <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                    <option value="1">1kg</option>
                    <option value="2">2kg</option>
                    <option value="3">3kg</option>
                    <option value="4">4kg</option>
                </select>
            </div>
            <div className="badge">
                <div className="badge_item">M</div>
            </div>
        </div>
    )
}

export default CartItem