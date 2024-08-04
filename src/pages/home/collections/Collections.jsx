import style from './collections.module.css'

export const Collections = () => {
    return (
        <div className={style.collectionsContainer}>
            <h3>COLLECTIONS</h3>
            <div className={style.octoberCollection}>
                <img src='./src/assets/homeImages/collection/october.png'/>
                <h3>October</h3>
                <h4>COLLECTION</h4>
                <h2>10</h2>
            </div>
            <div className={style.autumnCollection}>
                <img src='./src/assets/homeImages/collection/autumn.png'/>
                <h2>Autumn</h2>
                <h4>COLLECTION</h4>
            </div>
            <div>
                <video src='./src/assets/homeImages/collection/collection.mp4' autoPlay loop muted controls/>
            </div>
            
        </div>
    )
}
