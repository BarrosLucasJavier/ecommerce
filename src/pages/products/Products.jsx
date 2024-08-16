import { SliderBar } from '../../components/atoms/sliderBar/SliderBar'
import useProducts from '../../hooks/useProducts'
import style from './products.module.css'
export const Products = () => {


    const { products } = useProducts()



    return (
        <main className={style.productsContainer}>
            <div>
                {products && products.map((product, index) => (
                    <div key={index}>
                        <h4>{product.name}</h4>
                    </div>
                ))}
            </div>
            <SliderBar/>
        </main>
    )
}
