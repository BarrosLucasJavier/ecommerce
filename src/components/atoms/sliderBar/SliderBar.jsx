import { useEffect, useState } from "react"
import useProducts from "../../../hooks/useProducts"
import { Left, Right } from "../../icons/icons"
import style from './sliderBar.module.css'

export const SliderBar = () => {

    const { pageProducts, totalPages, setPageProducts, category } = useProducts()

    const [initialPage, setInitialPage] = useState(1);
    const [finalPage, setFinalPage] = useState(totalPages < 5 ? totalPages : 5);

    useEffect(() => {
        setPageProducts(1)
        setInitialPage(1);
        setFinalPage(totalPages < 5 ? totalPages : 5);
    }, [category]);

    useEffect(() => {
        setFinalPage(totalPages < 5 ? totalPages : 5);
    }, [totalPages]);

    const nextbtn = () => {

        const nextPage = pageProducts + 1;

        if (nextPage <= totalPages) {
            setPageProducts(nextPage)
            if (pageProducts >= finalPage) {
                setInitialPage(initialPage + 5)
                setFinalPage(finalPage + 5)
            }
        }
    }

    const prevbtn = () => {
        if (pageProducts - 1 > 0) {
            setPageProducts(pageProducts - 1)
            if (pageProducts <= initialPage) {
                setInitialPage(initialPage - 5)
                setFinalPage(finalPage - 5)
            }
        }
    }

    const pagesRender = () => {
        const pages = [];

        for (let i = initialPage; i <= finalPage; i++) {
            if (i > totalPages) break
            pages.push(
                <button key={i}
                    className={pageProducts === i ? style.active : ''}
                    onClick={() => setPageProducts(i)}
                >{i}</button>
            )
        }
        return pages
    }


    return (
        <div className={style.sliderBarContainer}>
            {pageProducts === 1 ? <button className={style.btnMove} disabled><Left /></button>
                : <button className={style.btnMove} onClick={prevbtn}><Left /></button>}
            <div className={style.pageContainer}>
                {pagesRender()}
            </div>
            {pageProducts === totalPages ? <button className={style.btnMove} disabled><Right /></button>
                : <button className={style.btnMove} onClick={nextbtn}><Right /></button>}
        </div>
    )
}
