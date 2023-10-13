import { useSelector } from 'react-redux'
import { cartSelector } from 'store/cart/cart.selector'

export default function CartPage() {
    const { items } = useSelector(cartSelector)
    return (
        <div>
            <h4>This is the Cart Page</h4>
            <p>
                {items.map((item) => (
                    <div className="flex">
                        <div>
                            {item.name} x {item.quantity}
                        </div>
                        <div>Price: £{item.price}</div>
                    </div>
                ))}
            </p>
        </div>
    )
}
