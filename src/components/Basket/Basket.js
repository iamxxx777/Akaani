import { useState } from 'react'

// Tab Contents
import PaidContent from './TabContents/PaidContent'
import PendingContent from './TabContents/PendingContent'
import CompletedContent from './TabContents/CompletedContent'

import './Basket.scss'

const Basket = () => {

    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className="basket">
            <div className="basket_header">
                <h2>Baskets</h2>
                <button>Create Basket</button>
            </div>

            <div className="basket_tabs">
                <div className="tab_head">
                    <button onClick={() => setActiveTab(0)} className={activeTab === 0 ? "active" : null}>Paid</button>
                    <button onClick={() => setActiveTab(1)} className={activeTab === 1 ? "active" : null}>Pending</button>
                    <button onClick={() => setActiveTab(2)} className={activeTab === 2 ? "active" : null}>Completed</button>
                </div>
                <div className="tab_body">
                    {
                        activeTab === 0 ? <PaidContent /> : 
                        activeTab === 1 ? <PendingContent /> : <CompletedContent />
                    }
                </div>
            </div>
        </div>
    )
}

export default Basket