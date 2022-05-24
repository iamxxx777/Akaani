import './Stats.scss'

const Stats = () => {
    return (
        <aside className='aside'>
            <div className="aside_container">
                <div className="invites">
                    <h2>Invites</h2>
                    <p>You have no invites</p>
                </div>
                <div className="payments">
                    <h2>Recent Payments</h2>
                    <p>No payment has been made</p>
                </div>
                <div className="orders">
                    <h2>Previous Orders</h2>
                    <p>You have created no order</p>
                </div>
            </div>
        </aside>
    )
}

export default Stats