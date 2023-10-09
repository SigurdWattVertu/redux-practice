import data from 'api'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProductsAsync } from 'store/products/products.action';
import { useSelector } from 'react-redux';
import { productsSelector } from 'store/products/products.selector'
import { ProductCard } from 'components/productCard/productCard';

const Products = () => {

    const dispatch = useDispatch();

    const { products } = useSelector(productsSelector)

    //  If this actually called an API then A THUNK would be great
    // Set this up as an API 
    // Add a thunk.. Or just set it up as an API anyway ?
    useEffect(() => {
        dispatch(fetchProductsAsync())
    }, [])


    // if(products){
    //     console.log(products.json())
    // }
    return (
        <div className="grid cols-3">
            { products && products.map((product) => <ProductCard productObj={product} /> ) }
        </div>
    )
}

export default Products;