import { useState } from 'react';
import style from './menu.module.css'
import { ViewMenu } from './viewsMenu/viewMenu/ViewMenu';

export const Menu = () => {
    const womenMenu = ['New', 'Apparel', 'Bag', 'Shoes', 'Beauty', 'Accesories']
    const manMenu = ['Tops', 'Bottoms','Outerwear', 'Footwear', 'Accessories']
    const kidsMenu = ['Coat', 'Earmuffs', 'Beret', 'Gloves','Scarf','Panst']
    const [selectedItem, setSelectedItem] = useState('WOMEN');

    const handleItemClick = (item) =>{
        setSelectedItem(item)
    }

    const menuItems = ['WOMEN','MAN','KIDS'];
return (
    <div className={style.menuContainer}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18.7742 18.7742" strokeLinejoin="round"/>
            <path d="M6 18.7744L18.7742 6.00022" strokeLinejoin="round"/>
        </svg>
        <ul className={style.mainMenu}>
            {menuItems.map((item, index)=>(
                <li
                    key={index}
                    className={selectedItem === item ? style.activeLi : ''}
                    onClick={() => handleItemClick(item)}
                >{item}</li>
            ))}
        </ul>
        {selectedItem === 'WOMEN' && <ViewMenu props={womenMenu}/>}
        {selectedItem === 'MAN' && <ViewMenu props={manMenu}/>}
        {selectedItem === 'KIDS' && <ViewMenu props={kidsMenu}/>}
    </div>
)
}
