import { SliderBar } from '../../components/atoms/sliderBar/SliderBar'
import { ListCard } from '../../components/cards/listCard/ListCard'
import useProducts from '../../hooks/useProducts'
import style from './products.module.css'
export const Products = () => {

    const { products } = useProducts()

    return (
        <main className={style.productsContainer}>
            <div className={style.cardsContainer}>
                {products && products.map((product, index) => (
                    <ListCard key={index} product={product} />
                ))}
            </div>
            <SliderBar />
        </main>
    )
}
