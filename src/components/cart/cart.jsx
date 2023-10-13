import { useSelector } from 'react-redux'
import { cartSelector } from 'store/cart/cart.selector'
import './cart.scss'

const Cart = () => {
    const { items } = useSelector(cartSelector)

    console.log(items)

    return (
        <div className="cart">
            <div className="flex">
                <h3>Cart</h3>
                <p>{items.length}</p>
            </div>
        </div>
    )
}

export default Cart
