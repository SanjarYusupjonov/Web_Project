import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../src/App'; // Assuming you have an App component that includes all routes

// Mock all necessary components - for integration testing
jest.mock('../src/components/Navbar/NavBar', () => {
  return function MockNavBar() {
    return (
      <nav data-testid="navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
        <a href="/dishes">Menu</a>
      </nav>
    );
  };
});

// This is an integration test suite that will test navigation between pages
describe('App Integration Tests', () => {
  // Assuming you have a proper App component with routes
  test('navigates between pages', () => {
    // Mock implementation of App with routes
    const AppWithRoutes = () => (
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dishes" element={<DishesCard />} />
            <Route path="/" element={<div>Home Page</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    );

    const history = createMemoryHistory();
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppWithRoutes />
      </MemoryRouter>
    );

    // Check if we are on the home page
    expect(screen.getByText('Home Page')).toBeInTheDocument();

    // Click on About link and check if About page is rendered
    fireEvent.click(screen.getByText('About'));
    expect(screen.getByText('About US')).toBeInTheDocument();

    // Click on Blog link and check if Blog page is rendered
    fireEvent.click(screen.getByText('Blog'));
    expect(screen.getByText('Blog Posts')).toBeInTheDocument();

    // Click on Contact link and check if Contact page is rendered
    fireEvent.click(screen.getByText('Contact'));
    expect(screen.getByText('Send us a message')).toBeInTheDocument();

    // Click on Menu link and check if DishesCard page is rendered
    fireEvent.click(screen.getByText('Menu'));
    expect(screen.getByText('Delicious Dishes')).toBeInTheDocument();
  });
});