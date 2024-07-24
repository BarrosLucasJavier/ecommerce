import { ViewFooter } from '../viewFooter/ViewFooter'
import style from '../view.module.css'
import PropTypes from 'prop-types'
import { Down, Up } from '../../../../icons/icons'
import React, { useState } from 'react'

export const ViewMenu = (props) => {
  const viewList = props.props.submenus;
  const [subMenu, setSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setSubMenu((prevIndex) => (prevIndex === index ? null : index));
  }

  return (
    <div className={style.viewContainer}>
      <div className={style.viewMenu}>
        <ul>
          {viewList.map((item, index) => (
            <React.Fragment key={index}>
              <li
                className={style.liMenu}
                onClick={() => toggleSubMenu(index)}
              >{item.nombre}
                {item.items.length > 0 ? (subMenu === index ? <Up /> : <Down />) : null}
              </li>
              {item.items.length > 0 && subMenu === index && (
                <ul
                  key={item.nombre}
                  className={`${style.ulSubmenu} ${ style.block }`}
                >
                  {item.items.map((sub, subindex) => (
                    <li key={subindex}>
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
      <ViewFooter />
    </div>
  )
}
ViewMenu.propTypes = {
  props: PropTypes.object.isRequired
};