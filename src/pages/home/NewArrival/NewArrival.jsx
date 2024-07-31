import { useState } from "react"
import useProducts from "../../../hooks/useProducts"
import style from '../home.module.css'
import { BodyArrival } from "./bodyArrival/BodyArrival"



export const NewArrival = () => {

    const { latestProducts } = useProducts()
    const [activeLi, setActiveLi] = useState(4);

    const lastFourProducts = () => {

        const uniqueCategories = new Set();
        const lastFour = [];

        if (latestProducts) {
            for (const item of latestProducts) {
                if (!uniqueCategories.has(item.category)) {
                    uniqueCategories.add(item.category);
                    lastFour.push(item)
                }
                if (lastFour.length === 4) break
            }
        }
        return lastFour
    }

    const handleClickActive = (index) => {
        setActiveLi(index)
    }

    const latestFour = lastFourProducts();

    return (
        <section>
            <div className={style.headerArrival}>
                <h2>NEW ARRIVAL</h2>
                <ul>
                    <li className={activeLi === 4 ? style.active : ''}
                        onClick={()=>handleClickActive(4)}
                    >All</li>
                    {latestFour.map((item, index) => (
                        <li onClick={()=>handleClickActive(index)}
                            key={index}
                            className={activeLi === index ? style.active : ''}
                        >{item.category}</li>
                    ))}
                </ul>
            </div>
            <div className={style.bodyArrival}>
                <BodyArrival item={latestFour} active={activeLi}/>
            </div>
        </section>
    )
}
