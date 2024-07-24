import style from './exploreBtn.module.css'
import PropTypes from 'prop-types'

export const ExploreBtn = ({btnText}) => {

    return (
        <button className={style.exploreBtn}>{btnText}</button>
    )
}
ExploreBtn.propTypes = {
    btnText: PropTypes.string.isRequired
}