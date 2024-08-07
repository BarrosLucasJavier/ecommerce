import useProducts from '../../hooks/useProducts'
import style from './productSlider.module.css'
import noImage from '../../assets/noImage.jpg'


export const ProductSlider = () => {
    const { randomProducts } = useProducts()
    
    return (
        <section className={style.productSliderContainer}>
            <h3>JUST FOR YOU</h3>
            <div className={`lineDiv ` + style.lineDivisor}></div>
            <div className={style.sliderContainer}>
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
        </section>
    )
}
