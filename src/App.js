import {useEffect, useState} from "react";
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import ProductList from "./components/ProductList/ProductList.component";

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
        <div>
            <Header cartItems={cartItems}></Header>
            <ProductList products={products} onAddItem={handleAddItemToCart}></ProductList>
            <Footer cartItems={cartItems} />
        </div>
    );
}

export default App;