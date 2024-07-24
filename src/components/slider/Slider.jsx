import { useState, useEffect } from "react";
import { ExploreBtn } from "../atoms/buttons/exploreBtn/ExploreBtn"
import style from './slider.module.css'
import PropTypes from 'prop-types'

export const Slider = ({ slider }) => {

    const [indexSlider, setIndexSlider] = useState(0);
    const [actualData, setActualData] = useState(slider.slider[indexSlider]);
    let initialX = null;

    const handleTouchStart = (e) => {
        initialX = e.touches[0].clientX;
    }

    useEffect(() => {
        setActualData(slider.slider[indexSlider])
    }, [indexSlider]);

    const handleTouchEnd = (e) => {
        const difX = e.changedTouches[0].clientX - initialX;

        if (difX > 0) {
            if (indexSlider + 1 > 2) {
                setIndexSlider(0);
            }else{
                setIndexSlider((prevIndex=>prevIndex + 1));
            }
        } else {
            if (indexSlider - 1 < 0) {
                setIndexSlider(2);
            }else{
                setIndexSlider((prevIndex=>prevIndex - 1));
            }
        }
    }
    return (
        <div className={style.bannerContainer}
            style={{ backgroundImage: `url('${actualData.imageUrl}')` }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <h1>{actualData.title[0]}<br /><span className={style.spaceTitle}></span>{actualData.title[1]}<br /><span className={style.andTitle}>&</span>{actualData.title[2]}</h1>
            <ExploreBtn btnText={actualData.buttonText} />
        </div>
    )
}

Slider.propTypes = {
    slider: PropTypes.object.isRequired
};