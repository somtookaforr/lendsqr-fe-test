import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterPopup from '../components/filter-popup';

describe('FilterPopup Component', () => {
  test('renders FilterPopup when show is true', () => {
    render(
      <FilterPopup show={true} onClose={() => {}} onFilter={() => {}} />
    );
    
    expect(screen.getByLabelText(/organization/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/status/i)).toBeInTheDocument();
  });

  test('calls onFilter and onClose on form submission', () => {
    const mockOnFilter = jest.fn();
    const mockOnClose = jest.fn();
    render(
      <FilterPopup show={true} onClose={mockOnClose} onFilter={mockOnFilter} />
    );

    // Type assertion for the input element
    const usernameInput = screen.getByLabelText(/username/i) as HTMLInputElement;
    fireEvent.change(usernameInput, { target: { value: 'testUser' } });
    
    fireEvent.click(screen.getByText(/filter/i));

    expect(mockOnFilter).toHaveBeenCalledWith({
      organization: '',
      username: 'testUser',
      email: '',
      date: '',
      phoneNumber: '',
      status: '',
    });
    expect(mockOnClose).toHaveBeenCalled();
  });

  test('resets filters on Reset button click', () => {
    const mockOnClose = jest.fn();
    render(
      <FilterPopup show={true} onClose={mockOnClose} onFilter={() => {}} />
    );

    const usernameInput = screen.getByLabelText(/username/i) as HTMLInputElement;
    fireEvent.change(usernameInput, { target: { value: 'testUser' } });
    
    fireEvent.click(screen.getByText(/reset/i));

    expect(usernameInput.value).toBe('');
  });
});
