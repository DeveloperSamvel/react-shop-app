import {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ProductList from './components/ProductList/ProductList.component';
import ContactUs from './components/ContactUs.component';
import getProducts from "./services/getProducts";

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const data = await getProducts();
                setProducts(() => data);
            } catch (error) {
                console.error(error);
            }
        }

        getData();
    }, []);

    const handleAddItemToCart = (product) => {
        setCartItems((currentArrCartItems) => {
            const existingCartItem = currentArrCartItems.find(({id}) => id === product.id);
            if(existingCartItem) {
                return currentArrCartItems.map(cartItem => (
                    cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                ));
            }

            return [...currentArrCartItems, {...product, quantity: 1}]
        });
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage cartItems={cartItems} />}>
                    <Route index element={<ProductList products={products} onAddItem={handleAddItemToCart} />} />
                    <Route path="contact" element={<ContactUs />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;