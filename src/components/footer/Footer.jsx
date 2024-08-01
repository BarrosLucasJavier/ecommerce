import { Link } from "react-router-dom"
import { Instagram, Twitter, Youtube } from "../icons/icons"
import style from './footer.module.css'


export const Footer = () => {
    return (
        <footer className={style.footerContainer}>
            <div className={style.socialContainer}>
                <Twitter/>
                <Instagram/>
                <Youtube/>
            </div>
            <div className={style.infoContainer}>
                <div className='lineDiv'></div>
                <p>support@openui.design</p>
                <p>+60 825 876</p>
                <p>08:00 - 22:00 - Everyday</p>
                <div className='lineDiv'></div>
            </div>
            <div className={style.navigationContainer}>
                <Link>About</Link>
                <Link>Contact</Link>
                <Link>Blog</Link>
            </div>
            <div className={style.copyrightContainer}>
                <p>Copyright© OpenUI All Rights Reserved.</p>
            </div>
        </footer>
    )
}
