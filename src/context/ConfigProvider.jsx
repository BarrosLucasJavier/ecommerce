import { createContext, useState } from "react";
import PropTypes from 'prop-types';

const ConfigContext = createContext();

const ConfigProvider = ({ children }) => {

    const [viewType, setViewType] = useState('grid');

    return (
        <ConfigContext.Provider
            value={{
                viewType,
                setViewType
            }}
        >
            {children}
        </ConfigContext.Provider>
    )
}

ConfigProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export {
    ConfigProvider
};

export default ConfigContext;