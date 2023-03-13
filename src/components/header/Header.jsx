import module from './Header.module.scss'
import logo from '../assets/logo.png'
import heart from '../assets/heart.png'
import lupa from '../assets/lupa.png'
import cart from '../assets/cart_img.png'
import vector from '../assets/vector.png'
import { useState } from 'react'

const Header = (Props) => {
    const [burger, setBurger] = useState(false)

    function burgerMenu(e) {
        setBurger(!burger)
    }

    console.log(burger)

    return (
        <header>
            <div className={module.header_a}>
                <img src={logo}></img>
                <div className={module.container}>
                    <a href='#'>ГЛАВНЫЙ</a>
                    <a href='#'>КАТАЛОГ</a>
                    <a href='#'>СВЯЗАТЬСЯ С НАМИ</a>
                    <a href='#'>АКЦИИ</a>
                </div>
                {burger && (<div className={module.container_burger}>
                    <a href='#'>ГЛАВНЫЙ</a>
                    <a href='#'>КАТАЛОГ</a>
                    <a href='#'>СВЯЗАТЬСЯ С НАМИ</a>
                    <a href='#'>АКЦИИ</a>
                </div>)}
                {burger && (<div className={module.container_burger}>
                    <a href='#'>ГЛАВНЫЙ</a>
                    <a href='#'>КАТАЛОГ</a>
                    <a href='#'>СВЯЗАТЬСЯ С НАМИ</a>
                    <a href='#'>АКЦИИ</a>
                </div>)}
                <div className={module.burger} onClick={burgerMenu}>
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div className={module.head_pic}>
                    <a href='#'><img src={vector}></img></a>
                    <a href='#'><img src={cart}></img></a>
                    <a href='#'><img src={lupa}></img></a>
                    <a href='#'><img src={heart}></img></a>
                </div>
            </div>
        </header>
    );
};

export default Header