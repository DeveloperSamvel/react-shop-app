import {useState} from "react";
import Header from "./components/Header/Header.component";
import ProductList from "./components/ProductList/ProductList.component";
import {SHOP_ITEMS} from "./contents/SHOP_ITEMS";

function App() {
    const [cartItems, setCartItems] = useState([]);

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
        <div>
            <Header cartItems={cartItems}></Header>
            <ProductList products={SHOP_ITEMS} onAddItem={handleAddItemToCart}></ProductList>
        </div>
    );
}

export default App;