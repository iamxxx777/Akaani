import { Link } from 'react-router-dom'
import logo from '../../assets/akaani.svg'

import './SideNav.scss'

const SideNav = () => {
    return (
        <nav className='navbar'>
            <div className="nav_container">
                <div className="nav_content">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="Akaani logo" />
                        </Link>
                    </div>
                    <div className="links">
                        <Link to="profile">
                            <div className="link_item">
                                <i className="uil uil-user-circle"></i> <span>Profile</span>                            
                            </div>
                        </Link>
                        <Link to="baskets">
                            <div className="link_item">
                                <i className="uil uil-shopping-basket"></i> <span>Baskets</span>                            
                            </div>
                        </Link>
                        <Link to="orderhistory">
                            <div className="link_item">
                                <i className="uil uil-history"></i> <span>Order History</span>                            
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="nav_contact">
                    <div className="contact_icon">
                        <span>FE</span>
                    </div>
                    <div className="contact_name">
                        <span>Laura Edson</span>
                    </div>
                    <div className="contact_email">
                        <span>lauraedson@work.com</span>
                    </div>
                    <div className="contact_btn">
                        <button><i className="uil uil-upload-alt"></i></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideNav