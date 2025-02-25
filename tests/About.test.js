import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from '../src/pages/About';

// Mock the imported components
jest.mock('../src/components/About/AboutPage', () => () => <div data-testid="about-page">About Page Component</div>);
jest.mock('../src/components/About/AboutChefs', () => () => <div data-testid="about-chefs">About Chefs Component</div>);
jest.mock('../src/components/About/AboutDevs', () => () => <div data-testid="about-devs">About Devs Component</div>);
jest.mock('../src/components/Navbar/NavBar', () => () => <div data-testid="navbar">NavBar Component</div>);
jest.mock('../src/components/Footer', () => () => <div data-testid="footer">Footer Component</div>);

describe('About Page', () => {
  test('renders all components correctly', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    
    // Check if all components are rendered
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    expect(screen.getByTestId('about-chefs')).toBeInTheDocument();
    expect(screen.getByTestId('about-devs')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('displays correct heading text', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    
    expect(screen.getByText('About US')).toBeInTheDocument();
    expect(screen.getByText('Fueling your day with delicious, affordable bites!')).toBeInTheDocument();
  });
});