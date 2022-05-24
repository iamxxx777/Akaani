import Basket from '../../components/Basket/Basket'

import './Baskets.scss'

const Baskets = ({ click }) => {
    return (
        <div className="basket">    
            <div className="basket_container">
                <section className="heading">
                    <div className="welcome">
                        <h1>Good Evening, Laura!</h1>
                    </div>
                    <div className="form">
                        <form action="#">
                            <button><i className="uil uil-search"></i></button>
                            <input type="text" placeholder='Search Basket' />
                        </form>
                    </div>
                </section>
                <section className="stats">
                    <div className="stat">
                        <div className="icon">
                            <div className='icon_orange'>
                                <i className="uil uil-shopping-basket"></i>
                            </div>
                        </div>
                        <div className="info">
                            <h2>Total Basket</h2>
                            <h3>0</h3>
                        </div>
                    </div>
                    <div className="stat">
                        <div className="icon">
                            <div className='icon_blue'>
                                <i className="uil uil-truck"></i>
                            </div>
                        </div>
                        <div className="info">
                            <h2>In-Transit Jobs</h2>
                            <h3>0</h3>
                        </div>
                    </div>
                    <div className="stat">
                        <div className="icon">
                            <div className='icon_green'>
                                <i className="uil uil-credit-card"></i>
                            </div>
                        </div>
                        <div className="info">
                            <h2>Total Paid</h2>
                            <h3>$0.00</h3>
                        </div>
                    </div>
                    <div className="stat">
                        <div className="icon">
                            <div className='icon_purple'>
                                <i className="uil uil-box"></i>
                            </div>
                        </div>
                        <div className="info">
                            <h2>Completed Jobs</h2>
                            <h3>0</h3>
                        </div>
                    </div>
                </section>

                <section>
                    <Basket />
                </section>
                
                <button className="cart_btn" onClick={click}>
                    <span>4</span>
                    <div>
                        <i className="uil uil-shopping-basket"></i>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Baskets