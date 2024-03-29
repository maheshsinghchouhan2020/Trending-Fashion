import React from 'react'
import { PlayIcon, appIcon, logo, payIcon } from '../../../assets/img/img';

const FooterSection = () => {
  return (
    <footer className="footer">
    <div className="col">
        <img className="logo" src={logo} alt=""/>
        <h4>Contact</h4>
        <p>
            <strong>Address: </strong>
            1049, Vishwas Nagar, Pithampur (454775), Indore
        </p>
        <p><strong>Phone: </strong>+91 8770876711</p>
        <p><strong>Hours: </strong>24x7, Mon - sat</p>
        <div className="follow">
            <h4>Follow us</h4>
            <div className="icon">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-pinterest-p"></i>
                <i className="fab fa-youtube"></i>
            </div>
        </div>
    </div>

    <div className="col"><strong>About </strong><br/>
        <a href="#">About us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Primary policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact us</a>
    </div>
    <div className="col"><strong>My Account</strong><br />
        <a href="#">My Account</a>
        <a href="#">Sign In</a>
        <a href="#">View cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track my Order</a>
        <a href="#">Help</a>
        
    </div>

    <div className="col-install">
        <h4>Install apps</h4>
        <p>From app store or Google play</p>
        <div className="row">
            <img src={appIcon} alt="" />
      
            <img src={PlayIcon} alt="" />
        </div>
        <p>Secured payment gateway</p>
        <img src={payIcon} alt="" />
    </div>

    <div className="copyright">
        <p> &copy; 0 2023,Mahesh Singh Chouhan - HTML CSS JS REACT ecommerce project</p>
    </div>
</footer>
  )
}

export default FooterSection;
