import { useState } from 'react';
import style from './menu.module.css'
import { ViewMenu } from './viewsMenu/viewMenu/ViewMenu';
import { X } from '../../icons/icons';
import menu from '../../../data/menuData.json'
import useMenu from '../../../hooks/useMenu';

export const Menu = () => {

    const [selectedItem, setSelectedItem] = useState('WOMEN');
    const menuItems = ['WOMEN', 'MAN', 'KIDS'];

    const { setOpenMenu } = useMenu();

    const handleItemClick = (item) => {
        setSelectedItem(item)
    }

    return (
        <div className={style.menuContainer}>
            <div onClick={() => setOpenMenu(false)}>
                <X />
            </div>
            <ul className={style.mainMenu}>
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className={selectedItem === item ? style.activeLi : ''}
                        onClick={() => handleItemClick(item)}
                    >{item}</li>
                ))}
            </ul>
            {selectedItem === 'WOMEN' && <ViewMenu props={menu.menu[0]} />}
            {selectedItem === 'MAN' && <ViewMenu props={menu.menu[1]} />}
            {selectedItem === 'KIDS' && <ViewMenu props={menu.menu[2]} />}
        </div>
    )
}
