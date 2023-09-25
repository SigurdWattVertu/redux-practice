import data from 'api'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setProducts } from 'store/products/products.action';
import { useSelector } from 'react-redux';
import { productsSelector } from 'store/products/products.selector'
import { ProductCard } from 'components/productCard/productCard';

const Products = () => {

    const dispatch = useDispatch();

    const { products } = useSelector(productsSelector)

    useEffect(() => {
        dispatch(setProducts(data.items))
    }, [])


    console.log(products)
    return (
        <div className="grid cols-3">
            { products && products.map((product) => <ProductCard productObj={product} /> ) }
        </div>
    )
}

export default Products;