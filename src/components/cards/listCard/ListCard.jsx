import { Heart, Start } from '../../icons/icons';
import style from './listCard.module.css'
import PropTypes from 'prop-types'
import noImage from '../../../assets/noImage.jpg'
import loadingImg from '../../../assets/loading.jpg'
import useProducts from '../../../hooks/useProducts';

export const ListCard = ({ product }) => {

    const { loading } = useProducts()

    return (
        <>
            {loading ?
            <div className={style.cardContainer}>
            <img src={loadingImg}/>
            <div className={style.cardText}>
                <div className='loading'></div>
                <div>
                    <div className='loading'></div>
                    <div className='loading'></div>
                </div>
                <div className='loading'></div>
                <div className={style.cardSizeContainer}>
                    <div className='loading'></div>
                    <Heart />
                </div>
            </div>
            </div>
            :
            <div className={style.cardContainer}>
            <img src={product.images.length > 0 ? product.images : noImage} />
            <div className={style.cardText}>
                <h5>{product.brand}</h5>
                <div>
                    <p className={style.cardName}>{product.name}</p>
                    <p className={style.cardPrice}>${product.price}</p>
                </div>
                <p className={style.cardRating}><Start /> {product.rating} Ratings</p>
                <div className={style.cardSizeContainer}>
                    <p className={style.cardSize}>Size
                        {product.size.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}
                    </p>
                    <Heart />
                </div>
            </div>
            </div>
        }
        </>
        
        
    )
}

ListCard.propTypes = {
    product: PropTypes.object
}