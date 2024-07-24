import { createContext, useState } from "react";
import PropTypes from "prop-types";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <MenuContext.Provider
            value={{openMenu,
            setOpenMenu
            }}
        >
            {children}
        </MenuContext.Provider>
    )
}

MenuProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export {
    MenuProvider
};

export default MenuContext;

