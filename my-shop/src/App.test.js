import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders title text', () => {
  render(<App />);
  expect(screen.getByText(/신발 상품 목록/i)).toBeInTheDocument();
});

test('상품 담기 버튼 클릭 시 장바구니 숫자가 증가한다', async () => {
  render(<App />);

  const firstButton = screen.getAllByText('담기')[0];
  fireEvent.click(firstButton);

  await waitFor(() => {
    expect(screen.getByTestId('cart-count')).toHaveTextContent('1');
  });

  fireEvent.click(firstButton);
  await waitFor(() => {
    expect(screen.getByTestId('cart-count')).toHaveTextContent('2');
  });
});
