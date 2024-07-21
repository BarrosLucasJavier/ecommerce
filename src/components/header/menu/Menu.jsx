import { useState } from 'react';
import PropTypes from 'prop-types'
import style from './menu.module.css'
import { ViewMenu } from './viewsMenu/viewMenu/ViewMenu';
import { X } from '../../icons/icons';
import menu from '../../../data/menuData.json'

export const Menu = ({ menuOpen }) => {
    
    const [selectedItem, setSelectedItem] = useState('WOMEN');
    const menuItems = ['WOMEN','MAN','KIDS'];

    const handleItemClick = (item) =>{
        setSelectedItem(item)
    }

    const handleCloseClick = () => {
        menuOpen(false)
        console.log("asda");
    }
return (
    <div className={style.menuContainer}>
        <div onClick={handleCloseClick}>
            <X/>
        </div>
        <ul className={style.mainMenu}>
            {menuItems.map((item, index)=>(
                <li
                    key={index}
                    className={selectedItem === item ? style.activeLi : ''}
                    onClick={() => handleItemClick(item)}
                >{item}</li>
            ))}
        </ul>
        {selectedItem === 'WOMEN' && <ViewMenu props={menu.menu[0]}/>}
        {selectedItem === 'MAN' && <ViewMenu props={menu.menu[1]}/>}
        {selectedItem === 'KIDS' && <ViewMenu props={menu.menu[2]}/>}
    </div>
)
}
Menu.propTypes = {
    menuOpen: PropTypes.func.isRequired
}