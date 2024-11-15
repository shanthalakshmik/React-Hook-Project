import React from 'react';

const CartModal = ({ cartItems, removeFromCart, closeModal }) => {
    return (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="modal-content bg-blue p-6 rounded shadow-lg">
                <span className="close cursor-pointer text-gray-500 float-right" onClick={closeModal}>&times;</span>
                <h2 className="text-xl font-bold mb-4">Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id} className="flex justify-between items-center border-b py-2">
                                <span>{item.title}</span>
                                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white rounded px-2">
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CartModal;


