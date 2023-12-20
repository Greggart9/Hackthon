import React from 'react'
import './Product.css';

const Product = () => {
  return (
    <>
    <div className='ProductPage'>
        <div className='productContainer'>
            {/* THE FIRST TEXT */}

            <div productFirst>
                <p>Shop Laptops and Computers Laptops</p>
            </div>
              
              {/* THE LAPTOP AND INFO */}
            <div className='productSecond'>
                <div className=' productSecondLeft'>
                    <img src='/image/' alt='' />

                </div>

                <div className=' productSecondRight'>
                    <h3></h3>
                    <p></p>
                    <p></p>

                    <h2></h2><span></span><span></span>

                    <div className='productSecondRightBtn'>
                        <p></p>
                        <button></button>
                        <p></p>
                        <button></button>
                    </div>

                    <div className='AddToCart'>
                        <button></button>
                        <button></button>
                    </div>

                    <div className='productSecondRightDelivery'>
                        <div className='deliveryLeft'>
                            <p></p>
                            <p></p>
                            <p></p>
                            <div className='deliveryIcon'>
                                <img src='' alt='' />
                                <img src='' alt='' />
                                <img src='' alt='' />
                                <img src='' alt='' />

                            </div>

                        </div>

                        <div className='deliveryRight'>
                        <p></p>/
                        <p></p>

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