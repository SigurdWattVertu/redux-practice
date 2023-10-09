import { useSelector } from 'react-redux'
import { cartSelector } from 'store/cart/cart.selector';

const Cart = () => {

    const cart = useSelector(cartSelector)

    return (
        <div>
            <h3>Cart</h3>
            <p>{cart.items.map(item => (
                <p>{item.name} x {item.quantity}</p>
            ))}</p>
        </div>
    )
}

export default Cart;