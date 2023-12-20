import React from 'react'
import './Product.css';

const Product = () => {
  return (
    <>
    <div className='ProductPage'>
        <div className='productContainer'>
            {/* THE FIRST TEXT */}

            <div className='productFirst'>
                <p>Shop Laptops and Computers Laptops</p>
            </div>
              
              {/* THE LAPTOP AND INFO */}
            <div className='productSecond'>
                <div className=' productSecondLeft'>
                    <img src='/image/lapo7 1.png' alt='' />

                </div>

                <div className=' productSecondRight'>
                    <h3>Lenovo Thinkpad E14, Intel Core I5
                        -1135g7, 8gb Ram, 256gb Ssd Black 
                        (20ta000yue)
                    </h3>
                    <p id='productCode'>Product Code: <span style={{color: 'aqua'}}>0988272</span></p>
                    <p>Brand: Lenovo</p>

                    <div className='productPrice'><h1 style={{color: 'white'}}>₦667,700</h1><span style={{color: 'white', textDecorationLine: 'line-through'}}>₦697,700</span><span id='youSave' style={{color: 'aqua'}}>You save ₦30,000</span></div>

                    <div className='productSecondRightBtn'>
                        <p id='quatityBtn'>Quantity:</p>
                        <button>-</button>
                        <p id='number'>0</p>
                        <button>+</button>
                    </div>

                    <div className='AddToCart'>
                        <button id='addToCart'>ADD TO CART</button>
                        <button id='buyNow'>BUY NOW</button>
                    </div>

                    <div className='productSecondRightDelivery'>
                        <div className='deliveryLeft'>
                            <p>Same Day Delivery</p>
                            <p>Available at:</p>
                            <p style={{paddingTop: '15px'}}>Share With Friends</p>
                            <div className='deliveryIcon'>
                                <img src='' alt='' />
                                <img src='' alt='' />
                                <img src='' alt='' />
                                <img src='' alt='' />

                            </div>

                        </div>

                        <div className='deliveryRight'>
                        <p style={{paddingRight: '8px'}}>Ibadan</p>/
                        <p  style={{paddingLeft: '8px'}}>Lagos</p>

                        </div>

                    </div>

                </div>

                
            </div>
        </div>

    </div>
    </>
  )
}

export default Product