import React from 'react'
import './Wallet.css'

const Wallet = () => {
  return (
   <div className='walletContainer'>
     <div className='walletContent'>
            {/* MY PROFILE */}
        <div className='walletLeft'>
          <div className='walletLeft1'>
            <span className='walletLeft1Span'>
              <img src='/image/headerIcon.png' alt='' />
              <h5>My Profile</h5>
            </span>
            <p>Account Information</p>
            <p>Delivery Address</p>
          </div>


             {/* MY ORDERS */}
          <div className='walletLeft2'>
          <span className='walletLeft2Span'>
              <img  src='/image/headerIcon.png' alt='' />
              <h5>My Orders</h5>
            </span>
            <p>Order History</p>
            <p>Pending Ratings</p>
          </div>


              {/* MY WALLET */}
          <div className='walletLeft3'>
          <span className='walletLeft3Span'>
              <img  src='/image/headerIcon.png' alt='' />
              <h5>My Wallet</h5>
            </span>
            <p>Wallet</p>
            
          </div>


              {/* DELETE ACCOUNT */}
          <div className='walletLeft4'>
          <span className='walletLeft4Span'>
              <img  src='/image/headerIcon.png' alt='' />
              <h5>Delete Account</h5>
            </span>
            <p>Delete Account</p>
            
          </div>

        </div>

        <div className='walletRight'>
          <div className='walletRight1'>
            <div className='walletRight1Content'>
              <p>Available Balance</p>
              <h3>#0</h3>
              <button id='fundMyWallet'>Fund My Wallet</button>
              <button id='requestPayment'>Request Payment</button>

            </div>

          </div>

          <div className='walletRight2'>
              <div className='walletRight2Content'>
                <div className='walletNavbar'>
                  <ol>
                    <li>ALL</li>
                    <li>RECEIVED</li>
                    <li>SENT</li>
                  </ol>
                </div>

                <div className='walletNavbarBody'>
                  <p>No Transaction Yet</p>
                </div>
              
              </div>
            
          </div>


        </div>

     </div>
   </div>
  )
}

export default Wallet