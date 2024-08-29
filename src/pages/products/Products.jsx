import { SliderBar } from '../../components/atoms/sliderBar/SliderBar'
import { ListCard } from '../../components/cards/listCard/ListCard'
import useConfig from '../../hooks/useConfig'
import useProducts from '../../hooks/useProducts'
import { OptionBar } from './optionBar/OptionBar'
import style from './products.module.css'
export const Products = () => {

    const { products } = useProducts();
    const { viewType } = useConfig()


    return (
        <main className={style.productsContainer}>
            <OptionBar />
            <div className={`${style.cardsContainer} ${style[viewType]}`}>
                {products && products.map((product, index) => (
                    <ListCard key={index} product={product} />
                ))}
            </div>
            <SliderBar />
        </main>
    )
}
