import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProductsAsync } from 'store/products/products.action'
import { useSelector } from 'react-redux'
import { productsSelector, selectProductsIsLoading } from 'store/products/products.selector'
import { ProductCard } from 'components/productCard/productCard'
import { Spinner } from 'components/spinner/spinner.component'

const Products = () => {
    const dispatch = useDispatch()

    const { products } = useSelector(productsSelector)
    const isLoading = useSelector(selectProductsIsLoading)

    //  If this actually called an API then A THUNK would be great
    // Set this up as an API
    // Add a thunk.. Or just set it up as an API anyway ?
    useEffect(() => {
        dispatch(fetchProductsAsync())
    }, [dispatch])

    return (
        <div>
            <h4 className="text-center">Our Products</h4>
            {isLoading ? <Spinner /> : <div className="grid cols-3">{products && products.map((product) => <ProductCard productObj={product} />)}</div>}
        </div>
    )
}

export default Products
