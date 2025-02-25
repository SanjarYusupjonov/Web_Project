import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DishesCard from '../src/pages/DishesCard';

jest.mock('../src/components/Navbar/NavBar', () => () => <div data-testid="navbar">NavBar Component</div>);
jest.mock('../src/components/Footer', () => () => <div data-testid="footer">Footer Component</div>);
jest.mock('../src/components/TotalPriceButton', () => ({ totalPrice }) => (
  <div data-testid="total-price-button">Total: ${totalPrice.toFixed(2)}</div>
));

describe('DishesCard Page', () => {
  test('renders dishes correctly', () => {
    render(
      <BrowserRouter>
        <DishesCard />
      </BrowserRouter>
    );
    
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByText('Our')).toBeInTheDocument();
    expect(screen.getByText('Delicious Dishes')).toBeInTheDocument();
    
    // Check if all dishes are rendered
    expect(screen.getByText('Margherita Pizza')).toBeInTheDocument();
    expect(screen.getByText('Pasta Carbonara')).toBeInTheDocument();
    expect(screen.getByText('Grilled Salmon')).toBeInTheDocument();
    
    // Check prices
    expect(screen.getByText('$12.99')).toBeInTheDocument();
    expect(screen.getByText('$15.50')).toBeInTheDocument();
    expect(screen.getByText('$18.99')).toBeInTheDocument();
  });

  test('quantity controls work correctly', () => {
    render(
      <BrowserRouter>
        <DishesCard />
      </BrowserRouter>
    );
    
    // Find all plus buttons and click on the first one multiple times
    const plusButtons = screen.getAllByRole('button', { name: '' });
    fireEvent.click(plusButtons[1]); // First plus button
    fireEvent.click(plusButtons[1]);
    
    // Check if quantity is updated
    const quantities = screen.getAllByText(/^[0-9]+$/);
    expect(quantities[0].textContent).toBe('2');
    
    // Check if total price is updated
    expect(screen.getByText('Total: $25.98')).toBeInTheDocument();
    
    // Click minus button once
    fireEvent.click(plusButtons[0]); // First minus button
    
    // Check if quantity is updated
    expect(quantities[0].textContent).toBe('1');
    
    // Check if total price is updated
    expect(screen.getByText('Total: $12.99')).toBeInTheDocument();
  });

  test('cannot decrease quantity below zero', () => {
    render(
      <BrowserRouter>
        <DishesCard />
      </BrowserRouter>
    );
    
    // Find all minus buttons and click on the first one
    const minusButtons = screen.getAllByRole('button', { name: '' });
    fireEvent.click(minusButtons[0]); // First minus button
    
    // Check if quantity remains at 0
    const quantities = screen.getAllByText(/^[0-9]+$/);
    expect(quantities[0].textContent).toBe('0');
    
    // Check if total price is still $0.00
    expect(screen.getByText('Total: $0.00')).toBeInTheDocument();
  });
});