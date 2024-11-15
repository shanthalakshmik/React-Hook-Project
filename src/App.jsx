import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartModalOpen, setCartModalOpen] = useState(false);

    // Function to add a product to the cart
    const addToCart = (product) => {
        if (cartItems.some(item => item.id === product.id)) {
            alert("Item already added to the cart");
        } else {
            setCartItems(prevItems => [...prevItems, product]);
        }
    };

    // Function to remove a product from the cart
    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    // Function to toggle the cart modal
    const toggleCartModal = () => {
        setCartModalOpen(!isCartModalOpen);
    };

    return (
        <div className="App">
            <Navbar cartCount={cartItems.length} openCart={toggleCartModal} />
            <ProductList addToCart={addToCart} cartItems={cartItems} />
            {isCartModalOpen && (
                <CartModal 
                    cartItems={cartItems} 
                    removeFromCart={removeFromCart} 
                    closeModal={toggleCartModal} 
                />
            )}
        </div>
    );
};

export default App;

    