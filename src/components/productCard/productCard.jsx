import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from 'store/cart/cart.action'
import { cartSelector } from 'store/cart/cart.selector'

// ProductObj gets passed down as productObj: DATA, so we destructure a first time here
export const ProductCard = ({ productObj }) => {
    const dispatch = useDispatch()
    const cart = useSelector(cartSelector)

    // And then here we need to destructure again in order to get the actual information inside it
    const { name, price } = productObj

    function addItem() {
        dispatch(addItemToCart(cart, productObj))
    }

    return (
        <div className="text-center">
            <h4>Product: {name}</h4>
            <p>Price: {price}</p>
            <button onClick={addItem}>Add Item to Cart</button>
        </div>
    )
}
