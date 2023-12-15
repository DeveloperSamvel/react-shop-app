import {useEffect, useState} from "react";
import Header from "./components/Header/Header.component";
import ProductList from "./components/ProductList/ProductList.component";

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const url = 'https://apishopv2.yerevan-city.am/api/Product/Search';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "count": 20,
          "page": 1,
          "priceFrom": null,
          "priceTo": null,
          "countries": [],
          "categories": [],
          "brands": [],
          "search": "Կաթ",
          "isDiscounted": false,
          "sortBy": 3
        })
      };
  
      async function getData() {
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          setProducts(() => (result && result.data && result.data.products));
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
        </div>
    );
}

export default App;