import React from 'react';

const Navbar = ({ cartCount, openCart }) => {
    return (
        <nav className="flex justify-between p-4 bg-blue-500 text-white">
            <h1 className="text-xl">FAKE STORE API</h1>
            <button className="relative" onClick={openCart}>
                Cart
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2">
                        {cartCount}
                    </span>
                )}
            </button>
            </nav>
    );
};

export default Navbar;