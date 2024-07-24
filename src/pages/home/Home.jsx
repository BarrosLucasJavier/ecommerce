
import { Slider } from '../../components/slider/Slider'
import style from './home.module.css'
import sliderData from '../../data/sliderData.json'
export const Home = () => {

  return (
    <div >
      <section className={style.homeContainer}>
        <Slider slider={sliderData} />
      </section>
    </div>
  )
}
