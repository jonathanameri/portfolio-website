import React from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className={'navbar'} >
                {/*<img src={logo} alt={'logo'} className={'logo'}/>*/}
                <div className={'logoName'}>Jonathan Ameri</div>
                <div className={'desktopMenu'}>
                    <Link className={'desktopMenuListItem'} >Home</Link>
                    <Link className={'desktopMenuListItem'} >About</Link>
                    <Link className={'desktopMenuListItem'} >Portfolio</Link>
                </div>
                <button className={'desktopMenuBtn'}>
                    <img className={'desktopMenuImg'} src={contactImg} alt={'menu'} />
                    <div className={'desktopMenuText'}>Contact</div>
                </button>
            </nav>
        </div>
    )
}

export default Navbar;