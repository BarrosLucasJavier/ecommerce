import { Instagram } from '../../../components/icons/icons'
import style from './follow.module.css'

export const FollowUs = () => {
    return (
        <div className={style.followContainer}>
            <h3>FOLLOW US</h3>
            <Instagram/>
            <div className={style.usContainer}>
                <div className={style.personContainer}>
                    <img src='./src/assets/homeImages/follow/us1.png'/>
                    <span>@mia</span>
                    <div></div>
                </div>
                <div className={style.personContainer}>
                    <img src='./src/assets/homeImages/follow/us2.png'/>
                    <span>@_jihin</span>
                    <div></div>
                </div>
                <div className={style.personContainer}>
                    <img src='./src/assets/homeImages/follow/us3.png'/>
                    <span>@lutia</span>
                    <div></div>
                </div>
                <div className={style.personContainer}>
                    <img src='./src/assets/homeImages/follow/us4.png'/>
                    <span>@cami.ok</span>
                    <div></div>
                </div>

            </div>
        </div>
    )
}
