import './Basket.scss'

const EmptyBasket = ({ type }) => {
    return (
        <div className='empty_basket'>
            <div className="empty_content">
                <div className="icon">
                    <i class="uil uil-shopping-basket"></i>
                </div>
                <div className="text">
                    <p>No {type} Baskets, yet!</p>
                </div>
            </div>
        </div>
    )
}

export default EmptyBasket