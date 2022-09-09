import React from 'react'
import { Link } from 'react-router-dom'
import digitalpalikaimg from "../icons/digital_palika.png"

export default function Header() {
    return (
        <div className="sticky-top">
        <nav className="navbar navbar-expand">
         
          <div className="sidebar-btn">
            <Link
            to="#"
              role="button"
              id="btn_sidebar"
              data-bs-toggle="collapse"
              data-bs-target=".collapse-Menu"
              aria-expanded="false"
              aria-controls="side-bar content-bar"
            >
              <i className="fas fa-bars"></i>
            </Link>
          </div>
         
          <div id="logo">
            <Link to="/" className="navbar-brand navbar-toggle">
              <img
                src={digitalpalikaimg}
                height="40px"
                width="40px"
                alt=""
              />
    
              <span className="heading"> डिजिटल पालिका</span>
            </Link>
          </div>
        
          
          <div id="navbarCollapse" className="navbar-collapse">
            <div className="navbar-collapse d-flex justify-content-end" id="navbarSupportedContent" >
              
              <div className="dropstart">
                <i className="fa-solid las la-search pe-3 fa-lg navico" data-bs-toggle="dropdown" aria-expanded="false"></i>
                <ul className="dropdown-menu" style={{ border:"none", background:"none"}}>
                  <div className="input-group search-box" bis_skin_checked="1">
    
                    <input type="text" id="search" className="form-control" placeholder="खोज्नुहोस्" autocomplete="off"/>
    
                    <span className="input-group-addon disabled"><i className="las la-search"></i></span>
                </div>
                </ul>
              </div>
    
              <div className="dropstart">
                <div className="position-absolute" id="count" style={{margin:"-9px 20px",fontSize:"12px"}} bis_skin_checked="1">0</div>
                <i className="fa-solid fa-bell  pe-3 fa-lg navico" data-bs-toggle="dropdown" aria-expanded="false"></i>
                <ul className="dropdown-menu mt-5">
                  <li><Link to="#" className="dropdown-item text-success fw-bold fs-6">Notification</Link></li>
                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li>
                    
                  </li>
                </ul>
              </div>
              
              <div className="dropstart">
                <i className="fa-solid fa-user pe-3 fa-lg navico" data-bs-toggle="dropdown" aria-expanded="false"></i>
                <ul className="dropdown-menu mt-5">
                  <li><Link to="#" className="dropdown-item text-success fw-bold fs-6">Super Admin</Link></li>
                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li><Link className="cssnav" to="/profile"><i
                        className="fa-solid fa-user m-2"></i> Profile</Link></li>
                  <li><Link className="cssnav" to="/setting"><i
                        className="fa-solid fa-gear m-2"></i> Settings</Link></li>
                  <li><Link className="cssnav" to="#"><i
                        className="fa-solid fa-arrow-right-from-bracket m-2"></i> Logout</Link></li>
                </ul>
              </div>
            </div>
          </div>
              
        </nav>
    </div>
    )
}
