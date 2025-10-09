import React from 'react';
import './ProductCard.css';

function ProductCard({ image, title, description, price, onAdd }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>

        <div className="price-btn-container">
          <span className="product-price">{price}</span>
          {/* type="button"으로 명시 — form내에서 submit 되는 걸 방지 */}
          <button type="button" className="product-btn" onClick={onAdd}>담기</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
