import { ViewFooter } from '../viewFooter/ViewFooter'
import style from '../view.module.css'
import PropTypes from 'prop-types'

export const ViewMenu = (props) => {
  const viewList = props.props;

  return (
    <div className={style.viewContainer}>
      <div className={style.viewMenu}>
        <ul>
          {viewList.map((item, index) => (
            <li
              key={index}
              className={style.liMenu}
            >{item}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.4447 8.48145L12.4815 15.4446L5.51836 8.48144" />
              </svg>
            </li>
          ))}
        </ul>
      </div>
      <ViewFooter/>
    </div>
  )
}
ViewMenu.propTypes={
  props: PropTypes.array.isRequired
};