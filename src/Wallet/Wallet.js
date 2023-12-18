import React from 'react'
import { useState } from "react";
import './Wallet.css'

const Wallet = () => {

  const [showWalletRight2Content, setShowWalletRight2Content] = useState(true)
  const[showFundWallet, setshowFundWallet] = useState(false)
  const[showcashDepositBody, setCashDepositBody] = useState(false)
  const[showPayStack, setShowPayStack] = useState(false)


  // const handleWalletRight2Content = ()=>{
  //   setShowWalletRight2Content(t)
  // }

  const handleFundWallet = () => {
    setshowFundWallet(true)
    setShowWalletRight2Content(false)
  }
  const handlecashDepositBody = () => {
    setCashDepositBody(true)
  }

  const handlePayStack = () => {
    setShowPayStack(true)
    setCashDepositBody(false)
    
  }

  return (
  <>
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
              <button onClick={handleFundWallet} id='fundMyWallet'>Fund My Wallet</button>
              <button id='requestPayment'>Request Payment</button>

            </div>

          </div>

          <div className='walletRight2'>

            {/* TRANSACTION HISTORY */}

{ showWalletRight2Content &&<div className='walletRight2Content'>
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
              
              </div>}

              {/* FUND MY WALLET */}
{showFundWallet  && <div className = 'walletRight22Content'>
                <div className='walletFundWalletNav'>
                  <p>Fund Wallet</p>
                </div>

                <div className='walletFundWalletBody'>
                  <div className = 'fundWalletBtn'>

                    {/* CASH DEPOSIT */}
                   <button onClick={handlecashDepositBody} id ='cashDeposit'> Cash Deposit</button>

                    {/* PAYSTACK */}
                    <button onClick={handlePayStack} id ='payStack'> <img src='/image/headerIcon.png' alt ='' />paystack</button>
                  </div>
                      
                  {/* CASH DEPOSIT BODY */}
{showcashDepositBody && <div className='cashDepositBody'>
                    <p>Please visit any of the Banks below nationwide<br/>
                      Ask for a PayDirect deposit slip.<br/>
                      Fill it out and give it to the bank teller along with <br/>
                      your funds for Ganda Mart Wallet.<br/>
                      Please give them your email address</p>

                    <div className='cashDepositBank'>
                      <img src='/image/accessnab 1.png' alt='' />
                      <img src='/image/first 1.png' alt='' />

                    </div>
                  </div>}

                  {/* PAYSTACK BODY */}
{showPayStack && <div className='payStackBody'>
                  

                 </div>}


                </div>
              
              </div>}
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Wallet