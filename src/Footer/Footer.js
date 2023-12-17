import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className='FooterContainer'>
        <div className='FooterContent'>

            <div className='Footer1'>

                <div className='Footer1Content'>
                    <div className='Footer11'>
                        <img  src='/image/headerIcon.png' alt='' />
                        <span className='Footer11Span'>
                            <h5>Email Support</h5>
                            <p>help@ganda.com.ng</p>
                        </span>
                    </div>

                    <div className='Footer12'>
                        <img  src='/image/headerIcon.png' alt='' />
                        <span className='Footer11Span'>
                            <h5>Phone Support</h5>
                            <p>09079865433, +2349138796685</p>
                        </span>
                    </div>

                    <div className='Footer13'>
                        <img  src='/image/headerIcon.png' alt='' />
                        <span className='Footer11Span'>
                            <h5>Whatsapp</h5>
                            <p>09079865433, +2349138796685</p>
                        </span>
                    </div>

                    <div className='Footer14'>
                        <input type='email' name='email' id='email' placeholder='Email Address' />
                        <button>Subscribe</button>

                    </div>
                </div>
            </div>
            <div className='Footer2'>
            <div className='Footer2Content'>
                <div className='Footer2Content1'>

                    <div className='Footer21'>
                        <h5 id='Footer211'>ABOUT GANDA</h5>
                        <p>Contact Us</p>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Our Blog</p>
                        <p>Forum</p>
                        <p>Terms & Conditions</p>
                    </div>

                    <div className='Footer22'>
                        <h5 id='Footer221'>PAYMENT</h5>
                        <p>Wallet</p>
                        <p>Verve</p>
                        <p>Mastercard</p>
                        <p>Visa</p>
                    </div>

                    <div className='Footer23'>
                        <h5 id='Footer231'>BUYING ON GANDA</h5>
                        <p>Buying Safety Centre</p>
                        <p>FAQs</p>
                        <p>Delivery</p>
                        <p>GANDA Return Policy</p>
                        <p>Digital Services</p>
                        <p>Bulk Purchase</p>
                    </div>

                    <div className='Footer24'>
                        <h5 id='Footer241'>MORE INFO</h5>
                        <p>Site Map</p>
                        <p>Track My Order</p>
                        <p>Privacy Policy</p>
                        <p>Authentic Items Policy </p>
                    </div>

                    </div>
                    <div className='Footer2Content2'>
                        <h5 id='Footer251'>CONNECT WITH US</h5>
                        <span id='Footer251Image'>
                        <img  src='/image/headerIcon.png' alt='' />
                        <img  src='/image/headerIcon.png' alt='' />
                        <img  src='/image/headerIcon.png' alt='' />
                        <img  src='/image/headerIcon.png' alt='' />
                        </span>
                    </div>
                </div>
  
            </div>
            <div className='Footer3'>
                <div className='Footer3Content'>
                    
                    <hr id='line'/>
                    <p>Copyright @ Ganda.com.ng. All right reserved</p>
                </div>

            </div>

        </div>
    </div>
    </>
  )
}

export default Footer