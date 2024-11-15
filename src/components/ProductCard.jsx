import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="border rounded-lg p-4 shadow-lg">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
            <h2 className="font-bold">{product.title}</h2>
            <p className="text-gray-500">${product.price}</p>
            <button onClick={() => onAddToCart(product)} className="mt-2 bg-blue-500 text-white rounded px-4 py-2">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;