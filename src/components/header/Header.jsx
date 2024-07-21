import { useState } from 'react'
import logo from '../../assets/Logo.png'
import { Bag, Bars, Glass } from '../icons/icons'
import style from './header.module.css'
import { Menu } from './menu/Menu'


const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuOpen = (isOpen) => {
        setOpenMenu(isOpen)
    }
    return (
        <header className={style.headerContainer}>
            <div onClick={() => handleMenuOpen(true)}>
                <Bars/>
            </div>
            <img src={logo} />
            <div>
                <Glass />
                <Bag />
            </div>
            {openMenu ? <Menu menuOpen={handleMenuOpen} /> : null}
        </header>
    )
}

export default Header
