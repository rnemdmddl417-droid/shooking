import React, { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import shoesData from "./data";

// 헤더 하트 아이콘
const HeartIconHeader = ({ size = 26, filled = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "#ec4899" : "none"} stroke="#ec4899" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.54 0 3.04.99 3.57 2.36h1.87C13.46 4.99 14.96 4 16.5 4 19 4 21 6 21 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

// 헤더 장바구니 아이콘
const CartIconHeader = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#111827" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.44C8.52 16.37 9.48 18 11 18h8v-2h-7.42c-.14 0-.25-.07-.31-.18L12.1 15h4.45c.75 0 1.41-.41 1.75-1.03L21 6H7zM7 20c-1.1 0-1.99.9-1.99 2S5.9 24 7 24s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);

function App() {
  const [products, setProducts] = useState(
    [...shoesData].map(p => ({ ...p, _liked: false })).sort((a, b) => b.likes - a.likes)
  );
  const [cartCount, setCartCount] = useState(0);
  const [showFavorites, setShowFavorites] = useState(false); // 찜 페이지 토글 상태

  // 담기 기능
  const handleAddToCart = (id) => setCartCount(prev => prev + 1);

  // 찜 기능
  const handleToggleLike = (id) => {
    setProducts(prev => {
      const next = prev.map(item => {
        if (item.id === id) {
          const liked = !item._liked;
          return { ...item, _liked: liked, likes: item.likes + (liked ? 1 : -1) };
        }
        return item;
      });
      next.sort((a, b) => b.likes - a.likes);
      return next;
    });
  };

  // 찜 목록 필터링
  const displayedProducts = showFavorites ? products.filter(p => p._liked) : products;

  return (
    <div className="app-wrap">
      <header className="app-header">
        <h1 className="app-title">
          {showFavorites ? "찜한 상품목록" : "신발 상품목록"}
        </h1>
        <p className="app-subtitle">
          {showFavorites
            ? `현재 ${displayedProducts.length}개의 찜한 상품이 있습니다.`
            : `현재 ${products.length}개의 상품이 있습니다.`}
        </p>

        <div className="app-header-icons">
          {/* 하트 아이콘 클릭 → 찜 페이지 이동 */}
          <div
            className="header-heart"
            title="찜한 상품 보기"
            onClick={() => setShowFavorites(prev => !prev)}
            style={{ cursor: "pointer" }}
          >
            <HeartIconHeader filled={showFavorites} />
          </div>

          <div className="header-cart" title="장바구니">
            <CartIconHeader />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
        </div>
      </header>

      <main className="product-area">
        {displayedProducts.length === 0 ? (
          <p style={{ textAlign: "center", color: "#6b7280", marginTop: "40px" }}>
            {showFavorites ? "찜한 상품이 없습니다 🩶" : "상품이 없습니다."}
          </p>
        ) : (
          <div className="grid">
            {displayedProducts.map((p, idx) => (
              <div key={p.id} className="grid-item">
                <ProductCard
                  product={p}
                  rank={idx + 1}
                  onAddToCart={() => handleAddToCart(p.id)}
                  onToggleLike={() => handleToggleLike(p.id)}
                />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
