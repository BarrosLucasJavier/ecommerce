import { DetailView, FullView, GridView, Triangle } from "../../../components/icons/icons";
import useConfig from "../../../hooks/useConfig";
import useProducts from "../../../hooks/useProducts"
import style from './optionBar.module.css'


export const OptionBar = () => {

    const { categories, setCategory } = useProducts();
    const { viewType, setViewType } = useConfig()

    const handleClick = (e) => {
        setCategory(e.target.value)
    }

    const handleClickView = (view) => {
        switch (view) {
            case 'grid':
                setViewType('full')
                break;
            case 'full':
                setViewType('detail')
                break;
            case 'detail':
                setViewType('grid')
                break;
            default:
                break;
        }
    }

    return (
        <div className={style.optionBarContainer}>
            <div className={style.selectContainer}>
                <select onChange={handleClick}>
                    <option value=''>All</option>
                    {categories.data && categories.data.map((category, index) => (
                        <option key={index}
                            value={category}
                        >
                            {category}
                        </option>
                    ))}
                </select>
                <Triangle/>
            </div>
            <div className={style.viewContainer}>
                {viewType === 'grid' && <div onClick={() => handleClickView('grid')}><FullView /></div>}
                {viewType === 'full' && <div onClick={() => handleClickView('full')}><DetailView /></div>}
                {viewType === 'detail' && <div onClick={() => handleClickView('detail')}><GridView /></div>}
            </div>
        </div>
    )
}
