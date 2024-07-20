import logo from '../../assets/Logo.png'
import { Bag, Bars, Glass } from '../icons/icons'
import style from './header.module.css'
import { Menu } from './menu/Menu'


const Header = () => {
    return (
        <header className={style.headerContainer}>
            <Bars/>
            <img src={logo}/>
            <div>
                <Glass/>
                <Bag/>
            </div>
            <Menu/>
        </header>
    )
}

export default Header
