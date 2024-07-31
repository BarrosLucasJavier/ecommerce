import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState(null);
    const [latestProducts, setLatestProducts] = useState(null);

    const productsLoad = async () => {
        try {
            const url = 'https://apicrudproducts-1h45.onrender.com/api/v1/products';
            const data = await axios.get(url);
            setProducts(data.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    const latest = async () => {
        try {
            const url = 'https://apicrudproducts-1h45.onrender.com/api/v1/products/latest';
            const data = await axios.get(url);
            setLatestProducts(data.data.data);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        latest();
        productsLoad();
    }, []);

    return (
        <ProductsContext.Provider value={{ products, latestProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}
ProductsProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export {
    ProductsProvider
}

export default ProductsContext;
