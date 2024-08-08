
import { Slider } from '../../components/slider/Slider'
import style from './home.module.css'
import sliderData from '../../data/sliderData.json'
import { NewArrival } from './NewArrival/NewArrival'
import { Brands } from './brands/Brands'
import { Collections } from './collections/Collections'
import { ProductSlider } from './productSlider/ProductSlider'
import { Trends } from './trends/Trends'
export const Home = () => {

  const trending = ["2024","spring","collection","fall","dress","autumncollection","openfashion"];

  return (
    <div >
      <section className={style.homeContainer}>
        <Slider slider={sliderData} />
      </section>
      <NewArrival/>
      <Brands/>
      <Collections/>
      <ProductSlider/>
      <Trends trendList={trending}/>
    </div>
  )
}
