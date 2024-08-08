import PropTypes from 'prop-types'
import style from './trends.module.css'

export const Trends = ({trendList}) => {
    return (
        <>
            <div className={style.trendContainer}>
                <h3>@TRENDING</h3>
                <ul>
                    {trendList && trendList.map((item, index)=>(
                        <li key={index}>#{item}</li>
                    ))}
                </ul>
            </div>
            <div className={style.goalsContainer}>
                <div className={style.header + ` ${style.child}`}>
                    <img src='./src/assets/Logo.png'/>
                    <p>Making a luxurious lifestyle accessible for a generous group of women is our daily drive.</p>
                </div>
                <div className={style.ship + ` ${style.child}`}>
                    <img src='./src/assets/homeImages/goals/geometrics.png'/>
                    <p>Fast shipping. Free on orders over $25.</p>
                </div>
                <div className={style.sustain + ` ${style.child}`}>
                    <img src='./src/assets/homeImages/goals/plant.png'/>
                    <p>Sustainable process from start to finish.</p>
                </div>
                <div className={style.unique + ` ${style.child}`}>
                    <img src='./src/assets/homeImages/goals/heart.png'/>
                    <p>Unique designs and high-quality materials.</p>
                </div>
                <div className={style.fast + ` ${style.child}`}>
                    <img src='./src/assets/homeImages/goals/crown.png'/>
                    <p>Fast shipping. Free on orders over $25.</p>
                </div>
                <div className={style.footer + ` ${style.child}`}>
                    <img src='./src/assets/homeImages/goals/cur.png'/>
                </div>
            </div>
        </>
    )
}

Trends.propTypes = {
    trendList: PropTypes.array
}