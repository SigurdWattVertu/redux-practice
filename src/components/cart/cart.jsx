import { useSelector } from 'react-redux'
import { cartSelector } from 'store/cart/cart.selector';

const Cart = () => {

    const cart = useSelector(cartSelector)

    console.log(cart)

    return (
        <div>
            <p>Cart Total: { cart.cartTotal}</p>
        </div>
    )
}

export default Cart;