import PropTypes from 'prop-types'
import noImage from '../../../../assets/noImage.jpg'
import style from '../../home.module.css'
import { Start } from '../../../../components/icons/icons';

export const BodyArrival = ({ item, active }) => {

    let activeItem;
    if (active != 4) {
        activeItem = item[active];
    }

    console.log(item);
    return (
        <div className={ active === 4 ? style.gridArrival : style.itemActive}>
            {active === 4 ?
                item.map((arrival, index) => (
                    <div key={index} className={style.gridItem}>
                        <img src={arrival.images.length > 0 ? arrival.images[0] : noImage}></img>
                        <div className={style.gridText}>
                            <p><span>{arrival.brand}</span> {arrival.name}</p>
                            <span>$ {arrival.price}</span>
                        </div>
                    </div>
                ))
                : (
                    <>
                        <img src={activeItem ? activeItem.images[0] : './src/assets/noImage.jpg'}/>
                        <div className={style.flexColumn}>
                            <h3>{activeItem.brand} {activeItem.category}</h3>
                            <p>{activeItem.description}</p>
                            <div className={style.flexRow}>
                                <h4>$ {activeItem.price}</h4>
                                <span>
                                <Start/>
                                {activeItem.rating} Ratings</span>
                            </div>
                            <div className={style.sizeItem}>
                                <p>Size</p>
                                {activeItem.size.map((itemSize, index) => (
                                    <span key={index}
                                    >{itemSize}</span>))}
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}
BodyArrival.propTypes = {
    item: PropTypes.array,
    active: PropTypes.number
}