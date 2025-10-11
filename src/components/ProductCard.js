import React, { useState } from 'react';
import './ProductCard.css';

function ProductCard({ image, title, description, price, onAdd }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    // 버튼 클릭 시 "담김!"으로 변경하고 장바구니 숫자 +1
    onAdd();
    setIsAdded(true);

    // 1.5초 후 다시 "담기"로 복귀
    setTimeout(() => {
      setIsAdded(false);
    }, 500);
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>

        <div className="price-btn-container">
          <span className="product-price">{price}</span>
          <button
            type="button"
            className="product-btn"
            onClick={handleClick}
            disabled={isAdded} // 눌린 동안 중복 클릭 방지
          >
            {isAdded ? '담김!' : '담기'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
