import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [pageProducts, setPageProducts] = useState(1);
    const [latestProducts, setLatestProducts] = useState(null);
    const [randomProducts, setRandomProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const productsLoad = async (limit = 10, page = pageProducts, order = 'DES', sortBy = 'release_date', search = '') => {
        try {
            setLoading(true)
            const url = `https://api-cru-dproducts.vercel.app/api/v1/products?limit=${limit}&page=${page}&order=${order}&sortBy=${sortBy}&search=${search}`;
            const data = await axios.get(url);
            setProducts(data.data.data);
            setTotalPages(data.data.totalPages);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    const latest = async () => {
        try {
            const url = 'https://api-cru-dproducts.vercel.app/api/v1/products?order=DES&limit=4';
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
                maxIndexs--;
            }
        } while (maxIndexs > 0);
        setRandomProducts(randomProductsArray);
    }

    useEffect(() => {
        productsLoad();
        latest();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageProducts]);

    useEffect(() => {
        if (products) {
            randomProductsFunction();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);

    return (
        <ProductsContext.Provider value={{ 
            products,
            latestProducts,
            randomProducts,
            setPageProducts, 
            totalPages, 
            pageProducts,
            loading,
            setLoading
            }}>
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
