
import { Slider } from '../../components/slider/Slider'
import style from './home.module.css'
import sliderData from '../../data/sliderData.json'
import { NewArrival } from './NewArrival/NewArrival'
import { Brands } from '../../components/brands/Brands'
import { Collections } from './collections/Collections'
import { ProductSlider } from '../../components/productSlider/ProductSlider'
export const Home = () => {

  return (
    <div >
      <section className={style.homeContainer}>
        <Slider slider={sliderData} />
      </section>
      <NewArrival/>
      <Brands/>
      <Collections/>
      <ProductSlider/>
    </div>
  )
}
