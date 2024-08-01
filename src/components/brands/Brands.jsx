import style from './brands.module.css'

export const Brands = () => {
    return (
        <div>
            <div className='lineDiv'></div>
            <div className={style.brandsContainer}>
                <img src='./src/assets/homeImages/brands/prada.png'/>
                <img src='./src/assets/homeImages/brands/burberry.png'/>
                <img src='./src/assets/homeImages/brands/boss.png'/>
                <img src='./src/assets/homeImages/brands/cartier.png'/>
                <img src='./src/assets/homeImages/brands/gucci.png'/>
                <img src='./src/assets/homeImages/brands/tiffany.png'/>                
            </div>
            <div className='lineDiv'></div>
        </div>
    )
}
