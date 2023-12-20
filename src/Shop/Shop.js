import React from 'react'
import './Shop.css'

const Shop = () => {
  return (
    <div className='shopBody'>
        <section id="">
            <div className="flex-box">
                <div className="text-box1">
                    <input className="search" type="text" placeholder="Search for products"/>
                    <h2 className="text1">Timeless design legacy Galaxy S23 FE</h2>
                    <button className="first-btn">Shop Now</button>
                </div>
                <div>
                    <img src="/image/sammyweb3 1.png" alt="" />
                </div>
            </div>
        </section>

        {/* featured products section  */}

        <section className="featured">
            <h2>Feature Products</h2>
            <div className="flex-box">
                <div className="category">
                    <h3>Browse Categories</h3>
                    <p>Smartphone and Accessories</p>
                    <ul>
                        <li>Mobile Phones</li>
                        <li>Phone Cases</li>
                        <li>Screen Protector</li>
                        <li>Chargers and Cables</li>
                        <li>Power Banks</li>
                    </ul>
                    <p>Laptops and Computer</p>
                    <p>Audio and Headphones</p>
                    <p id='categoryLastp'>Wearables</p>

                    <hr id='firstHr'/>
                    
                    <legend className='legendPrice'>Price</legend>
                    <div id='priceLabel'>
                    <label for="price"><input type="radio" />Under ₦2000</label><br />
                    <label for="price"><input type="radio" />₦2000 - ₦5000</label><br />
                    <label for="price"><input type="radio" />₦5000 - ₦10000</label><br />
                    <label for="price"><input type="radio" />₦10000 - ₦20000</label><br />
                    <label for="price"><input type="radio" />₦20000 - ₦40000</label><br />
                    <label for="price"><input type="radio" />Above ₦40000</label>
                    </div>
                    
                    <h4>Custom Price Range</h4>
                    <div className="range">
                        <label for="">₦<input type="text" placeholder="Min" /></label><br />
                        {/* <label for="">₦<input type="text" placeholder="Max"/></label>  */}
                    </div>
                    <hr/>

                    <div>
                        <h4>Brand</h4>
                        <label for=""><input type="checkbox" />Samsung</label><br /> 
                        <label for=""><input type="checkbox"  />Apple</label><br /> 
                        <label for=""><input type="checkbox" />LG</label><br />
                        <label for=""><input type="checkbox" />Oraimo</label><br />
                        <label for=""><input type="checkbox" />Tecno</label><br />
                        <label for=""><input type="checkbox" />Logitec</label><br />
                        <label for=""><input type="checkbox" />Sony</label><br />
                        <label for=""><input type="checkbox" />Dell</label><br />
                        <label for=""><input type="checkbox" />HP</label><br />
                        <label for=""><input type="checkbox" />Lontor</label><br />
                        <label for=""><input type="checkbox" />Acer</label>
                    </div><hr/>
                    
                    <div>
                        <h4>Shipping</h4>
                        <label for=""><input type="checkbox" />Same Day Delivery</label><br />
                        <label for=""><input type="checkbox" />Pay on Delivery</label>
                    </div><hr/>

                    <div>
                        <h4>Item Availability</h4>
                        <label for=""><input type="checkbox" />In Merchant Store</label><br />
                        <label for=""><input type="checkbox" />In Ganda Mart Warehouse</label>
                    </div><hr/>

                    <div>
                        <h4>Ratings</h4>
                        <label for=""><input type="radio" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                                <path d="M21.3758 8.10285H13.4781L11.0295 0.446533L8.58083 8.10285H0.683105L7.06337 12.8277L4.64921 20.4495L11.0295 15.7247L17.4097 20.4495L14.9611 12.7932L21.3758 8.10285Z" fill="#FFCE31"/>
                            </svg>
                            & Up
                        </label><br />
                        <label for=""><input type="radio" /><svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                            <path d="M21.3758 8.10285H13.4781L11.0295 0.446533L8.58083 8.10285H0.683105L7.06337 12.8277L4.64921 20.4495L11.0295 15.7247L17.4097 20.4495L14.9611 12.7932L21.3758 8.10285Z" fill="#FFCE31"/>
                            <path d="M21.0275 8.10285H13.1298L10.6812 0.446533L8.23254 8.10285H0.334808L6.71507 12.8277L4.30092 20.4495L10.6812 15.7247L17.0614 20.4495L14.6128 12.7932L21.0275 8.10285Z" fill="#FFCE31"/>
                        </svg> & Up</label><br />
                        <label for=""><input type="radio" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                            <path d="M21.3758 8.10285H13.4781L11.0295 0.446533L8.58083 8.10285H0.683105L7.06337 12.8277L4.64921 20.4495L11.0295 15.7247L17.4097 20.4495L14.9611 12.7932L21.3758 8.10285Z" fill="#FFCE31"/>
                        </svg> & Up</label><br />
                        <label for=""><input type="radio" /><svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                            <path d="M21.3758 8.10285H13.4781L11.0295 0.446533L8.58083 8.10285H0.683105L7.06337 12.8277L4.64921 20.4495L11.0295 15.7247L17.4097 20.4495L14.9611 12.7932L21.3758 8.10285Z" fill="#FFCE31"/>
                        </svg> & Up</label>
                    </div>

                </div>

                <div className="products">
                    <div className="product">
                        <img src="/image/baggy1 1.png" alt="" />
                        <p className="type">Galapeno Laptop Stand</p>
                        <div className="discount">
                            <p className="price">₦29,500</p>
                            <p className="price"><span style={{fontWeight: "400"}}><s>₦34,999</s></span></p>
                        </div>
                        <p className="location">Same day delivery Ibadan | Lagos</p>
                        <p className="seller">Sold  by <span style={{color: "#FF8D69"}}>Ganda Mart</span></p>
                        <p className="review">
                            <svg xmlns="http://www.w3.org/2000/svg" width="107" height="20" viewBox="0 0 107 20" fill="none">
                                <path d="M9.64885 0L7.23664 7.23664H0L6.03053 12.0611L3.61832 19.2977L9.64885 14.4733L15.6794 19.2977L13.2672 12.0611L19.2977 7.23664H12.0611L9.64885 0Z" fill="#F9B60E"/>
                                <path d="M31.5744 0L29.1622 7.23664H21.9255L27.9561 12.0611L25.5439 19.2977L31.5744 14.4733L37.6049 19.2977L35.1927 12.0611L41.2232 7.23664H33.9866L31.5744 0Z" fill="#F9B60E"/>
                                <path d="M53.5 0L51.0878 7.23664H43.8511L49.8817 12.0611L47.4695 19.2977L53.5 14.4733L59.5305 19.2977L57.1183 12.0611L63.1488 7.23664H55.9122L53.5 0Z" fill="#F9B60E"/>
                                <path d="M75.4256 0L73.0134 7.23664H65.7767L71.8073 12.0611L69.3951 19.2977L75.4256 14.4733L81.4561 19.2977L79.0439 12.0611L85.0744 7.23664H77.8378L75.4256 0Z" fill="#F9B60E"/>
                                <path d="M97.3511 0L94.9389 7.23664H87.7023L93.7328 12.0611L91.3206 19.2977L97.3511 14.4733L103.382 19.2977L100.969 12.0611L107 7.23664H99.7633L97.3511 0Z" fill="#F9B60E"/>
                            </svg>
                            (20 Reviews)</p>
                        <button className="first-btn">BUY NOW</button>
                    </div>

                    <div className="product">
                        <img src="/image/baggt 1.png" alt="" />
                        <p className="type">HP Pro-recycled Top Bag</p>
                        <p className="price">₦19,320</p>
                        <p className="location">Same day delivery Ibadan</p>
                <p className="seller">Sold  by <span style={{color: "#25DDE9;"}}>Ademide Stores</span></p>
                        <p className="review">
                            <svg xmlns="http://www.w3.org/2000/svg" width="107" height="20" viewBox="0 0 107 20" fill="none">
                                <path d="M9.64885 0L7.23664 7.23664H0L6.03053 12.0611L3.61832 19.2977L9.64885 14.4733L15.6794 19.2977L13.2672 12.0611L19.2977 7.23664H12.0611L9.64885 0Z" fill="#F9B60E"/>
                                <path d="M31.5744 0L29.1622 7.23664H21.9255L27.9561 12.0611L25.5439 19.2977L31.5744 14.4733L37.6049 19.2977L35.1927 12.0611L41.2232 7.23664H33.9866L31.5744 0Z" fill="#F9B60E"/>
                                <path d="M53.5 0L51.0878 7.23664H43.8511L49.8817 12.0611L47.4695 19.2977L53.5 14.4733L59.5305 19.2977L57.1183 12.0611L63.1488 7.23664H55.9122L53.5 0Z" fill="#F9B60E"/>
                                <path d="M75.4256 0L73.0134 7.23664H65.7767L71.8073 12.0611L69.3951 19.2977L75.4256 14.4733L81.4561 19.2977L79.0439 12.0611L85.0744 7.23664H77.8378L75.4256 0Z" fill="#F9B60E"/>
                                <path d="M97.3511 0L94.9389 7.23664H87.7023L93.7328 12.0611L91.3206 19.2977L97.3511 14.4733L103.382 19.2977L100.969 12.0611L107 7.23664H99.7633L97.3511 0Z" fill="#F9B60E"/>
                            </svg>
                            (2 Reviews)</p>
                        <button className="first-btn">BUY NOW</button>
                    </div>

                    <div className="product">
                        <img src="/image/iphonngg 1.png" alt="" />
                        <p className="type">Apple iPhone 15 Pro</p>
                        <p className="price">₦1,500,000</p>
                        <p className="location">Same day delivery Ibadan | Lagos</p>
                        <p className="seller">Sold  by <span style={{color: "#FF8D69;"}}>Ganda Mart</span></p>
                        <p className="review">
                            <svg xmlns="http://www.w3.org/2000/svg" width="107" height="20" viewBox="0 0 107 20" fill="none">
                                <path d="M9.64885 0L7.23664 7.23664H0L6.03053 12.0611L3.61832 19.2977L9.64885 14.4733L15.6794 19.2977L13.2672 12.0611L19.2977 7.23664H12.0611L9.64885 0Z" fill="#D9D9D9"/>
                                <path d="M31.5744 0L29.1622 7.23664H21.9255L27.9561 12.0611L25.5439 19.2977L31.5744 14.4733L37.6049 19.2977L35.1927 12.0611L41.2232 7.23664H33.9866L31.5744 0Z" fill="#D9D9D9"/>
                                <path d="M53.4999 0L51.0877 7.23664H43.8511L49.8816 12.0611L47.4694 19.2977L53.4999 14.4733L59.5304 19.2977L57.1182 12.0611L63.1488 7.23664H55.9121L53.4999 0Z" fill="#D9D9D9"/>
                                <path d="M75.4256 0L73.0134 7.23664H65.7767L71.8073 12.0611L69.3951 19.2977L75.4256 14.4733L81.4561 19.2977L79.0439 12.0611L85.0744 7.23664H77.8378L75.4256 0Z" fill="#D9D9D9"/>
                                <path d="M97.3511 0L94.9389 7.23664H87.7023L93.7328 12.0611L91.3206 19.2977L97.3511 14.4733L103.382 19.2977L100.969 12.0611L107 7.23664H99.7633L97.3511 0Z" fill="#D9D9D9"/>
                            </svg>
                            (No Reviews)</p>
                        <button className="first-btn">BUY NOW</button>
                    </div>

                    <div className="product">
                        <img src="/image/nokki 1.png" alt="" />
                        <p className="type">Nokia C10 - 6.52"</p>
                        <p className="price">₦52,000</p>
                        <p className="location">Same day delivery Ibadan | Lagos</p>
                        <p className="seller">Sold  by <span style={{color: "#25DDE9;"}}>Moon Phone Place</span></p>
                        <p className="review">
                            <svg xmlns="http://www.w3.org/2000/svg" width="107" height="20" viewBox="0 0 107 20" fill="none">
                                <path d="M9.64885 0L7.23664 7.23664H0L6.03053 12.0611L3.61832 19.2977L9.64885 14.4733L15.6794 19.2977L13.2672 12.0611L19.2977 7.23664H12.0611L9.64885 0Z" fill="#F9B60E"/>
                                <path d="M31.5744 0L29.1622 7.23664H21.9255L27.9561 12.0611L25.5439 19.2977L31.5744 14.4733L37.6049 19.2977L35.1927 12.0611L41.2232 7.23664H33.9866L31.5744 0Z" fill="#F9B60E"/>
                                <path d="M53.5 0L51.0878 7.23664H43.8511L49.8817 12.0611L47.4695 19.2977L53.5 14.4733L59.5305 19.2977L57.1183 12.0611L63.1488 7.23664H55.9122L53.5 0Z" fill="#F9B60E"/>
                                <path d="M75.4256 0L73.0134 7.23664H65.7767L71.8073 12.0611L69.3951 19.2977L75.4256 14.4733L81.4561 19.2977L79.0439 12.0611L85.0744 7.23664H77.8378L75.4256 0Z" fill="#F9B60E"/>
                                <path d="M97.3511 0L94.9389 7.23664H87.7023L93.7328 12.0611L91.3206 19.2977L97.3511 14.4733L103.382 19.2977L100.969 12.0611L107 7.23664H99.7633L97.3511 0Z" fill="#F9B60E"/>
                            </svg>
                            (8 Reviews)</p>
                        <button className="first-btn">BUY NOW</button>
                    </div>

                    <div className="product">
                        <img src="/image/charger 1.png" alt="" />
                        <p className="type">Oraimo 4p Charger</p>
                        <p className="price">₦9,210</p>
                        <p className="location">Same day delivery Ibadan | Lagos</p>
                        <p className="seller">Sold  by <span style={{color: "#FF8D69;"}}>Ganda Mart</span></p>
                        <p className="review">
                            <svg xmlns="http://www.w3.org/2000/svg" width="107" height="20" viewBox="0 0 107 20" fill="none">
                                <path d="M9.64885 0L7.23664 7.23664H0L6.03053 12.0611L3.61832 19.2977L9.64885 14.4733L15.6794 19.2977L13.2672 12.0611L19.2977 7.23664H12.0611L9.64885 0Z" fill="#F9B60E"/>
                                <path d="M31.5744 0L29.1622 7.23664H21.9255L27.9561 12.0611L25.5439 19.2977L31.5744 14.4733L37.6049 19.2977L35.1927 12.0611L41.2232 7.23664H33.9866L31.5744 0Z" fill="#F9B60E"/>
                                <path d="M53.5 0L51.0878 7.23664H43.8511L49.8817 12.0611L47.4695 19.2977L53.5 14.4733L59.5305 19.2977L57.1183 12.0611L63.1488 7.23664H55.9122L53.5 0Z" fill="#F9B60E"/>
                                <path d="M75.4256 0L73.0134 7.23664H65.7767L71.8073 12.0611L69.3951 19.2977L75.4256 14.4733L81.4561 19.2977L79.0439 12.0611L85.0744 7.23664H77.8378L75.4256 0Z" fill="#F9B60E"/>
                                <path d="M97.3511 0L94.9389 7.23664H87.7023L93.7328 12.0611L91.3206 19.2977L97.3511 14.4733L103.382 19.2977L100.969 12.0611L107 7.23664H99.7633L97.3511 0Z" fill="#F9B60E"/>
                            </svg>
                            (41 Reviews)</p>
                        <button className="first-btn">BUY NOW</button>
                    </div>

                    <div className="product">
                        <img src="/image/mack 1.png" alt="" />
                        <p className="type">Apple Macbook Pro 13</p>
                        <p className="price">₦1,400,500</p>
                        <p className="location opac">Same day delivery Ibadan | Lagos</p>
                        <p className="seller">Sold  by <span style={{color: "#25DDE9;"}}>Ike Apple Place</span></p>
                        <p className="review">
                            <svg xmlns="http://www.w3.org/2000/svg" width="107" height="20" viewBox="0 0 107 20" fill="none">
                                <path d="M9.64885 0L7.23664 7.23664H0L6.03053 12.0611L3.61832 19.2977L9.64885 14.4733L15.6794 19.2977L13.2672 12.0611L19.2977 7.23664H12.0611L9.64885 0Z" fill="#D9D9D9"/>
                                <path d="M31.5744 0L29.1622 7.23664H21.9255L27.9561 12.0611L25.5439 19.2977L31.5744 14.4733L37.6049 19.2977L35.1927 12.0611L41.2232 7.23664H33.9866L31.5744 0Z" fill="#D9D9D9"/>
                                <path d="M53.4999 0L51.0877 7.23664H43.8511L49.8816 12.0611L47.4694 19.2977L53.4999 14.4733L59.5304 19.2977L57.1182 12.0611L63.1488 7.23664H55.9121L53.4999 0Z" fill="#D9D9D9"/>
                                <path d="M75.4256 0L73.0134 7.23664H65.7767L71.8073 12.0611L69.3951 19.2977L75.4256 14.4733L81.4561 19.2977L79.0439 12.0611L85.0744 7.23664H77.8378L75.4256 0Z" fill="#D9D9D9"/>
                                <path d="M97.3511 0L94.9389 7.23664H87.7023L93.7328 12.0611L91.3206 19.2977L97.3511 14.4733L103.382 19.2977L100.969 12.0611L107 7.23664H99.7633L97.3511 0Z" fill="#D9D9D9"/>
                            </svg>
                            (0 Reviews)</p>
                        <button className="first-btn">BUY NOW</button>
                    </div>

                    <div className="product">
                        <img src="/image/Frame 103.png" alt="" />
                        <p className="type">Galapeno Laptop Stand</p>
                        <p className="price">₦27,500</p>
                        <p className="location">Same day delivery Ibadan | Lagos</p>
                        <p className="seller">Sold  by <span style={{color: "#FF8D69;"}}>Ganda Mart</span></p>
                        <p className="review">
                            <svg xmlns="http://www.w3.org/2000/svg" width="107" height="20" viewBox="0 0 107 20" fill="none">
                                <path d="M9.64885 0L7.23664 7.23664H0L6.03053 12.0611L3.61832 19.2977L9.64885 14.4733L15.6794 19.2977L13.2672 12.0611L19.2977 7.23664H12.0611L9.64885 0Z" fill="#F9B60E"/>
                                <path d="M31.5744 0L29.1622 7.23664H21.9255L27.9561 12.0611L25.5439 19.2977L31.5744 14.4733L37.6049 19.2977L35.1927 12.0611L41.2232 7.23664H33.9866L31.5744 0Z" fill="#F9B60E"/>
                                <path d="M53.5 0L51.0878 7.23664H43.8511L49.8817 12.0611L47.4695 19.2977L53.5 14.4733L59.5305 19.2977L57.1183 12.0611L63.1488 7.23664H55.9122L53.5 0Z" fill="#F9B60E"/>
                                <path d="M75.4256 0L73.0134 7.23664H65.7767L71.8073 12.0611L69.3951 19.2977L75.4256 14.4733L81.4561 19.2977L79.0439 12.0611L85.0744 7.23664H77.8378L75.4256 0Z" fill="#F9B60E"/>
                                <path d="M97.3511 0L94.9389 7.23664H87.7023L93.7328 12.0611L91.3206 19.2977L97.3511 14.4733L103.382 19.2977L100.969 12.0611L107 7.23664H99.7633L97.3511 0Z" fill="#F9B60E"/>
                            </svg>
                            (110 Reviews)</p>
                        <button className="first-btn">BUY NOW</button>
                    </div>

                    <div className="product">
                        <img src="/image/ldfoiq 1.png" alt="" />
                        <p className="type">P47 Wireless Cat Ear</p>
                        <p className="price">₦5,450</p>
                        <p className="location opac">Same day delivery Ibadan | Lagos</p>
                        <p className="seller">Sold  by <span style={{color: "#25DDE9;"}}>Jydo Mart</span></p>
                        <p className="review">
                            <svg xmlns="http://www.w3.org/2000/svg" width="107" height="20" viewBox="0 0 107 20" fill="none">
                                <path d="M9.64885 0L7.23664 7.23664H0L6.03053 12.0611L3.61832 19.2977L9.64885 14.4733L15.6794 19.2977L13.2672 12.0611L19.2977 7.23664H12.0611L9.64885 0Z" fill="#F9B60E"/>
                                <path d="M31.5744 0L29.1622 7.23664H21.9255L27.9561 12.0611L25.5439 19.2977L31.5744 14.4733L37.6049 19.2977L35.1927 12.0611L41.2232 7.23664H33.9866L31.5744 0Z" fill="#F9B60E"/>
                                <path d="M53.5 0L51.0878 7.23664H43.8511L49.8817 12.0611L47.4695 19.2977L53.5 14.4733L59.5305 19.2977L57.1183 12.0611L63.1488 7.23664H55.9122L53.5 0Z" fill="#F9B60E"/>
                                <path d="M75.4256 0L73.0134 7.23664H65.7767L71.8073 12.0611L69.3951 19.2977L75.4256 14.4733L81.4561 19.2977L79.0439 12.0611L85.0744 7.23664H77.8378L75.4256 0Z" fill="#F9B60E"/>
                                <path d="M97.3511 0L94.9389 7.23664H87.7023L93.7328 12.0611L91.3206 19.2977L97.3511 14.4733L103.382 19.2977L100.969 12.0611L107 7.23664H99.7633L97.3511 0Z" fill="#F9B60E"/>
                            </svg>
                            (20 Reviews)</p>
                        <button className="first-btn">BUY NOW</button>
                    </div>

                    <div className="product">
                        <img src="/image/oculki 1.png" alt="" />
                        <p className="type">Samsung Gear VR Oculus</p>
                        <p className="price">₦459,500</p>
                        <p className="location">Same day delivery Ibadan | Lagos</p>
                        <p className="seller">Sold  by <span style={{color: "#FF8D69;"}}>Ganda Mart</span></p>
                        <p className="review">
                            <svg xmlns="http://www.w3.org/2000/svg" width="107" height="20" viewBox="0 0 107 20" fill="none">
                                <path d="M9.64885 0L7.23664 7.23664H0L6.03053 12.0611L3.61832 19.2977L9.64885 14.4733L15.6794 19.2977L13.2672 12.0611L19.2977 7.23664H12.0611L9.64885 0Z" fill="#F9B60E"/>
                                <path d="M31.5744 0L29.1622 7.23664H21.9255L27.9561 12.0611L25.5439 19.2977L31.5744 14.4733L37.6049 19.2977L35.1927 12.0611L41.2232 7.23664H33.9866L31.5744 0Z" fill="#F9B60E"/>
                                <path d="M53.5 0L51.0878 7.23664H43.8511L49.8817 12.0611L47.4695 19.2977L53.5 14.4733L59.5305 19.2977L57.1183 12.0611L63.1488 7.23664H55.9122L53.5 0Z" fill="#F9B60E"/>
                                <path d="M75.4256 0L73.0134 7.23664H65.7767L71.8073 12.0611L69.3951 19.2977L75.4256 14.4733L81.4561 19.2977L79.0439 12.0611L85.0744 7.23664H77.8378L75.4256 0Z" fill="#F9B60E"/>
                                <path d="M97.3511 0L94.9389 7.23664H87.7023L93.7328 12.0611L91.3206 19.2977L97.3511 14.4733L103.382 19.2977L100.969 12.0611L107 7.23664H99.7633L97.3511 0Z" fill="#F9B60E"/>
                            </svg>
                            (20 Reviews)</p>
                        <button className="first-btn">BUY NOW</button>
                    </div>
                </div>
            </div>
        </section>

        
        {/* Promo Section */}

        <section className="promo">
            
            <div className="promobox promobox1">
                <img src="/image/0000044 1.png" alt=""  />
            </div>

            <div className="promobox promobox2">
                    <img src="/image/phones promo1 1.png" alt="" />
                
            </div>
            
        </section>
    </div>
  )
}

export default Shop