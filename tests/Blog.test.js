import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Blog from '../src/pages/Blog';

jest.mock('../src/components/Navbar/NavBar', () => () => <div data-testid="navbar">NavBar Component</div>);
jest.mock('../src/components/Footer', () => () => <div data-testid="footer">Footer Component</div>);

describe('Blog Page', () => {
  test('renders blog list initially', () => {
    render(
      <BrowserRouter>
        <Blog />
      </BrowserRouter>
    );
    
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByText('Blog Posts')).toBeInTheDocument();
    
    // Check if all blog post titles are rendered
    expect(screen.getByText('🍽️ New Canteen Menu Update!')).toBeInTheDocument();
    expect(screen.getByText('🔥 Student Favorite: Manti')).toBeInTheDocument();
    expect(screen.getByText('💰 Get 20% Off on Fridays!')).toBeInTheDocument();
    expect(screen.getByText('🌍 Eco-Friendly Initiative: Bring Your Own Cup!')).toBeInTheDocument();
    expect(screen.getByText('🏆 Ramadan charity – Join Now!')).toBeInTheDocument();
    expect(screen.getByText('📢 Your Feedback Matters!')).toBeInTheDocument();
  });

  test('shows detailed view when a blog post is clicked', () => {
    render(
      <BrowserRouter>
        <Blog />
      </BrowserRouter>
    );
    
    // Click on a blog post
    fireEvent.click(screen.getByText('🍽️ New Canteen Menu Update!'));
    
    // Check if the detailed view is shown
    expect(screen.getByText('← Back')).toBeInTheDocument();
    expect(screen.getByText("We've added fresh salads, fruit bowls, and vegan-friendly meals. Try our new Quinoa Salad today!")).toBeInTheDocument();
  });

  test('back button returns to blog list', () => {
    render(
      <BrowserRouter>
        <Blog />
      </BrowserRouter>
    );
    
    // Go to detailed view
    fireEvent.click(screen.getByText('🍽️ New Canteen Menu Update!'));
    
    // Click back button
    fireEvent.click(screen.getByText('← Back'));
    
    // Check if we're back to the list view
    expect(screen.getByText('🍽️ New Canteen Menu Update!')).toBeInTheDocument();
    expect(screen.getByText('🔥 Student Favorite: Manti')).toBeInTheDocument();
  });

  test('feedback form works correctly', () => {
    render(
      <BrowserRouter>
        <Blog />
      </BrowserRouter>
    );
    
    // Go to feedback post
    fireEvent.click(screen.getByText('📢 Your Feedback Matters!'));
    
    // Fill out the feedback form
    const textarea = screen.getByPlaceholderText('Leave your feedback here...');
    fireEvent.change(textarea, { target: { value: 'Test feedback' } });
    
    // Submit the form
    fireEvent.click(screen.getByText('Submit'));
    
    // Check if thank you message appears
    expect(screen.getByText('Thank you for your feedback! 🎉')).toBeInTheDocument();
  });
});