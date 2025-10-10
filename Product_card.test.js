// 상품 카드의 렌더링, 담기 버튼 테스트
import Product_card from "./component/Product_card";
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

test('상품 카드가 렌더링된다', ()=>{
    render(<Product_card setCartCount={()=>{}} />);

    expect(screen.getByText('브랜드 A')).toBeInTheDocument();
    expect(screen.getByText('편안하고 착용감이 좋은 신발')).toBeInTheDocument();
    expect(screen.getByText('35,000원')).toBeInTheDocument();
    expect(screen.getByRole('button',{name:'담기'})).toBeInTheDocument();
});

test('버튼 클릭 시 텍스트가 "담김!"으로 바뀐다', ()=>{
    render(<Product_card setCartCount={()=>{}} />);

    const button = screen.getByRole('button', {name:'담기'});
    fireEvent.click(button);
    expect(button).toHaveTextContent('담김!');
});