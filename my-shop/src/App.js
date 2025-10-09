import React, { useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import { IoCartOutline } from 'react-icons/io5';

// 이미지가 src/assets에 있으면 import 방식 권장
import shoe1 from './assets/shoe1.jpg';
import shoe2 from './assets/shoe2.jpg';
import shoe3 from './assets/shoe3.jpg';
import shoe4 from './assets/shoe4.jpg';
import shoe5 from './assets/shoe5.jpg';
import shoe6 from './assets/shoe6.jpg';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { id: 1, brand: '브랜드 A', description: '편안하고 착용감이 좋은 신발', price: '35,000원', image: shoe1 },
    { id: 2, brand: '브랜드 B', description: '가볍고 통기성이 좋은 신발', price: '42,000원', image: shoe2 },
    { id: 3, brand: '브랜드 C', description: '일상에 어울리는 데일리 슈즈', price: '29,000원', image: shoe3 },
    { id: 4, brand: '브랜드 D', description: '러닝에 최적화된 운동화', price: '58,000원', image: shoe4 },
    { id: 5, brand: '브랜드 E', description: '쿠션감이 우수한 신발', price: '47,000원', image: shoe5 },
    { id: 6, brand: '브랜드 F', description: '스트릿 패션에 어울리는 신발', price: '53,000원', image: shoe6 },
  ];

  // 안전한 상태 업데이트: 함수형 업데이트 사용
  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    // 개발 시 디버깅용 로그 (브라우저 콘솔에서 확인)
    // console.log('add clicked, current will increment next render');
  };

  return (
    <div className="app">
      <header className="header">
        <div className="cart-wrap" role="region" aria-label="cart">
          <IoCartOutline size={24} color="#fff" />
          {/* 항상 표시하려면 조건부 제거: {cartCount > 0 && ...} */}
          <span data-testid="cart-count" className="cart-count">{cartCount}</span>
        </div>
      </header>

      <div className="title-section">
        <h2>신발 상품 목록</h2>
        <p>현재 {products.length}개의 상품이 있습니다.</p>
      </div>

      <div className="product-list">
        {products.map(item => (
          <ProductCard
            key={item.id}
            image={item.image}
            title={item.brand}
            description={item.description}
            price={item.price}
            onAdd={handleAddToCart}   // <-- 반드시 전달
          />
        ))}
      </div>
    </div>
  );
}

export default App;
