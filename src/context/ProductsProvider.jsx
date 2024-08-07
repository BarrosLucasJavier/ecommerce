import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState(null);
    const [latestProducts, setLatestProducts] = useState(null);
    const [randomProducts, setRandomProducts] = useState([]);

    const productsLoad = async () => {
        try {
            const url = 'https://api-cru-dproducts.vercel.app/api/v1/products';
            const data = await axios.get(url);
            setProducts(data.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    const latest = async () => {
        try {
            const url = 'https://api-cru-dproducts.vercel.app/api/v1/products/latest';
            const data = await axios.get(url);
            setLatestProducts(data.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    const randomProductsFunction = () => {

        if (!products) return null

        const totalProducts = products.length;
        const usedIndex = new Set();
        let maxIndexs = 3;
        const randomProductsArray = [];

        do {
            const randomIndex = Math.floor(Math.random() * totalProducts)
            if (!usedIndex.has(randomIndex)) {
                usedIndex.add(randomIndex)
                randomProductsArray.push(products[randomIndex])
            }
            maxIndexs--;
        } while (maxIndexs > 0);
        setRandomProducts(randomProductsArray);
    }

    useEffect(() => {
        productsLoad();
        latest();
    }, []);

    useEffect(() => {
        if (products) {
            randomProductsFunction();
        }
    }, [products]);

    return (
        <ProductsContext.Provider value={{ products, latestProducts, randomProducts }}>
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
