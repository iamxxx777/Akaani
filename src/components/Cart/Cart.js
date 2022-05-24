import CartItem from './CartItem'

import './Cart.scss'

const Cart = ({ click, showCart }) => {
    return (
        <div className={`cart ${showCart ? 'show_cart' : 'remove_cart'}`}>
            <section className="cart_header">
                <div className="text">
                    <button onClick={click}><i class="uil uil-arrow-left"></i></button>
                    <h2>My Cart</h2>
                </div>
                <div className="cart_header_btn">
                    <span>4</span>
                    <div>
                        <i className="uil uil-shopping-basket"></i>
                    </div>
                </div>
            </section>

            <section className="cart_items">
                <div className="cart_items_container">
                    <CartItem name="Okazi Leaves" price="30" qty="1" />
                    <CartItem name="Okazi Leaves" price="120" qty="4" />
                    <CartItem name="Rice Bean leaves" price="50" qty="1" />
                    <CartItem name="Efo Stew Ingredients" price="45" qty="1" />
                </div>
            </section>

            <section className="cart_total">
                <div className="total">
                    <h2>Total</h2>
                    <h3>$2,560</h3>
                </div>
                <button>Done Shopping</button>
            </section>
        </div>
    )
}

export default Cart