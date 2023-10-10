import './App.scss'
import Cart from 'components/cart/cart'
import HomePage from 'pages/home/home'
import CartPage from 'pages/cart/cart'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
    return (
        <div className="app-container grid vgap-3">
            <header>
                <Link to="/">
                    <h3 className="text-center">Sigurds Music Shop</h3>
                </Link>
                <div className="flex justify-end">
                    <Link to="/cart">
                        <Cart />
                    </Link>
                </div>
            </header>

            <Routes path="/">
                <Route index element={<HomePage />} />
                <Route path="cart" element={<CartPage />} />
            </Routes>
        </div>
    )
}

export default App
