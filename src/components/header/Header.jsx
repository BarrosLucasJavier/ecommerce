import logo from '../../assets/Logo.png'
import { Bag, Bars, Glass } from '../icons/icons'
import style from './header.module.css'
import { Menu } from './menu/Menu'
import useMenu from '../../hooks/useMenu'


const Header = () => {
    
    const { openMenu, setOpenMenu} = useMenu();


    return (
        <header className={style.headerContainer}>
            <div onClick={() => setOpenMenu(true)}>
                <Bars/>
            </div>
            <img src={logo} />
            <div>
                <Glass />
                <Bag />
            </div>
            {openMenu && <Menu/>}
        </header>
    )
}

export default Header
