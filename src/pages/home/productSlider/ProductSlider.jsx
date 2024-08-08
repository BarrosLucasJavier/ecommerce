import useProducts from '../../../hooks/useProducts'
import style from './productSlider.module.css'
import noImage from '../../../assets/noImage.jpg'
import { useRef, useState } from 'react';


export const ProductSlider = () => {
    const { randomProducts } = useProducts();
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const scrollToIndex = (index) => {

        if (sliderRef.current) {
            const width = sliderRef.current.clientWidth + 100;
            sliderRef.current.scrollTo({ left: width * index / 2, behavior: 'smooth' });
            setCurrentIndex(index)
        }
    }

    return (
        <section className={style.productSliderContainer}>
            <h3>JUST FOR YOU</h3>
            <div className={`lineDiv ` + style.lineDivisor}></div>
            <div className={style.sliderContainer} ref={sliderRef}>
                {randomProducts && randomProducts.map((item, index) => (
                    <div key={index}
                        className={style.sliderItem}
                    >
                        <img src={item.images.length > 0 ? item.images[0] : noImage} />
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p className={style.sliderPrice}>$ {item.price}</p>
                    </div>
                ))}
            </div>
            <div className={style.dotsContainer}>
                {
                    randomProducts && randomProducts.map((_, index) => (
                        <span key={index}
                            className={`${style.dot} ${currentIndex === index ? style.active : ''}`}
                            onClick={() => scrollToIndex(index)}
                        ></span>
                    ))
                }
            </div>
        </section>
    )
}
