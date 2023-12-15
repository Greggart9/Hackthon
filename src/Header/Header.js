import React from 'react'
import './Header.css'

const Header = () => {

    
  return (
    <>
    <header>
    <div className='headerContainer'>
        <div className='headerLogo'>
            <img src='/image/headerLogo.png' alt='headerLogo' />

        </div>
        <div className='headerNavbar'>
            <ol className='headerNavList'>
                <li>Home</li>
                <li>About Us</li>
                <li>Shop</li>
            </ol>

        </div>
        <div className='headerIcon'>
            <img src='/image/headerIcon.png' alt='headerIcon' />
        </div>
        <div className='headerGandaMarts'>
            <p id='headerGandaText'>Sell on Ganda Marts</p>
            <p id='headerGandaSign'>?</p>

        </div>
        <div className='headerHelpCart'>
            <p>Help <img id='vudown' src='/image/vudown.png' alt='down' /></p>
            <img src='/image/headerCart.png' alt='headerCart' />


        </div>
    </div>
</header>
</>
  )
}

export default Header