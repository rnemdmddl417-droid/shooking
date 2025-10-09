import React from "react";
import "./ProductCard.css";
import shoeImage from "../assets/shoe.jpg";

function ProductCard() {
  return (
    <div className="product-card">
      <img src={shoeImage} alt="상품 이미지" className="product-image" />
      <div className="product-info">
        <h3 className="product-title">브랜드 A</h3>
        <p className="product-description">편안하고 착용감이 좋은 신발</p>

        {/* 가격과 버튼 같은 줄 */}
        <div className="price-btn-container">
          <span className="product-price">35,000원</span>
          <button className="product-btn">담기</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
