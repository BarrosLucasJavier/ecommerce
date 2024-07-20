import { Call, Instagram, Locator, Twitter, Youtube } from '../../../../icons/icons'
import style from '../view.module.css'

export const ViewFooter = () => {
    return (
        <div className={style.viewFooter}>
            <p>
                <Call/>
                (786) 713-8616
            </p>
            <p>
                <Locator/>
                Store locator
            </p>
            <div className={style.socialContainer}>
                <Twitter/>
                <Instagram/>
                <Youtube/>
            </div>
        </div>
    )
}
