import logo from '../../assets/Logo.png'
import style from './header.module.css'
import { Menu } from './menu/Menu'


const Header = () => {
    return (
        <header className={style.headerContainer}>
            <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                <path d="M0.306763 12H15.9824" />
                <path d="M0.306641 5H23.6931" />
                <path d="M0.306641 19H23.6931" />
            </svg>
            <img src={logo}/>
            <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"/>
                    <path d="M22 21.9999L18.7823 18.7822"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.49594 23.28L4.31166 6.7207H20.659L21.4747 23.28H3.49594Z"/>
                    <path d="M8.1604 10.1491L8.1604 5.55139C8.1604 4.40438 8.61605 3.30434 9.42711 2.49328C10.2382 1.68221 11.3382 1.22656 12.4852 1.22656C13.6322 1.22656 14.7323 1.68221 15.5433 2.49328C16.3544 3.30434 16.8101 4.40438 16.8101 5.55139V10.1491"/>
                </svg>
            </div>
            <Menu/>
        </header>
    )
}

export default Header
