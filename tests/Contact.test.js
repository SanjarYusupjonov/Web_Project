import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contact from '../src/pages/Contact';
import axios from 'axios';
import Notiflix from 'notiflix';

// Mock axios and Notiflix
jest.mock('axios');
jest.mock('notiflix', () => ({
  Report: {
    success: jest.fn(),
    failure: jest.fn()
  }
}));

jest.mock('../src/components/Navbar/NavBar', () => () => <div data-testid="navbar">NavBar Component</div>);
jest.mock('../src/components/Footer', () => () => <div data-testid="footer">Footer Component</div>);
jest.mock('../src/components/CustomHook', () => ({
  useDocTitle: jest.fn()
}));

describe('Contact Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders contact form correctly', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByText('Send us a message')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('First Name*')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last Name*')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email*')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Phone*')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Message*')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    axios.mockResolvedValueOnce({ data: { message: 'Form submitted successfully' } });
    
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    
    // Fill out the form
    fireEvent.change(screen.getByPlaceholderText('First Name*'), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('Last Name*'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Email*'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Phone*'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByPlaceholderText('Message*'), { target: { value: 'Test message' } });
    
    // Submit the form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);
    
    // Check if axios was called with correct data
    await waitFor(() => {
      expect(axios).toHaveBeenCalled();
      expect(Notiflix.Report.success).toHaveBeenCalledWith(
        'Success',
        'Form submitted successfully',
        'Okay'
      );
    });
  });

  test('displays error messages when form submission fails', async () => {
    const errorResponse = {
      response: {
        status: 500,
        data: {
          message: 'Server error',
          errors: {
            first_name: 'First name is required',
            email: 'Invalid email format'
          }
        }
      }
    };
    axios.mockRejectedValueOnce(errorResponse);
    
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    
    // Submit the form without filling it
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);
    
    // Check if error messages are displayed
    await waitFor(() => {
      expect(Notiflix.Report.failure).toHaveBeenCalledWith(
        'An error occurred',
        'Server error',
        'Okay'
      );
      expect(screen.getByText('First name is required')).toBeInTheDocument();
      expect(screen.getByText('Invalid email format')).toBeInTheDocument();
    });
  });
});