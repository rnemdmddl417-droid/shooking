import React from "react";
import "./ProductCard.css";

/* Heart SVG component (props: filled:boolean, size:number) */
const HeartIcon = ({ filled, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "#ec4899" : "none"} xmlns="http://www.w3.org/2000/svg" stroke={filled ? "#ec4899" : "#9ca3af"} strokeWidth="1.5">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const ProductCard = ({ product, rank, onAddToCart, onToggleLike }) => {
  return (
    <div className="pcard">
      {/* top left rank badge */}
      <div className="pcard-badge">{rank}</div>

      {/* top-right: card heart + like count */}
      <div className="pcard-top-right">
        <button className="pcard-heart-btn" onClick={() => onToggleLike(product.id)}>
          <HeartIcon filled={product._liked === true} size={18} />
        </button>
        <div className="pcard-like-count">{product.likes}</div>
      </div>

      {/* image */}
      <div className="pcard-image-wrap">
        <img src={product.image} alt={product.title} className="pcard-image" />
      </div>

      {/* content */}
      <div className="pcard-content">
        <h4 className="pcard-title">{product.title}</h4>
        <div className="pcard-brand">{product.brand}</div>

        <div className="pcard-price-row">
          <div className="pcard-price">{product.price.toLocaleString()}원</div>
          <div className="pcard-palette">
            <span className="color-dot" style={{ background: "#d6c3a1" }}></span>
            <span className="color-dot" style={{ background: "#bcdff0" }}></span>
          </div>
        </div>

        <div className="pcard-buttons">
          <button className="pcard-add" onClick={() => onAddToCart(product.id)}>담기</button>
          <button className="pcard-buy">결제</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
