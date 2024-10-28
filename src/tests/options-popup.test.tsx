import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import OptionsPopup from '../components/options-popup';

describe('OptionsPopup Component', () => {
  test('renders OptionsPopup when show is true', () => {
    render(
      <MemoryRouter>
        <OptionsPopup 
          show={true} 
          position={{ top: 100 }} 
          onClose={() => {}} 
          onViewDetails={() => {}} 
          openFilterModal={() => {}} 
        />
      </MemoryRouter>
    );
    expect(screen.getByTestId('overlay')).toBeInTheDocument();
  });

  test('closes OptionsPopup on overlay click', () => {
    const mockOnClose = jest.fn();
    render(
      <MemoryRouter>
        <OptionsPopup 
          show={true} 
          position={{ top: 100 }} 
          onClose={mockOnClose} 
          onViewDetails={() => {}} 
          openFilterModal={() => {}} 
        />
      </MemoryRouter>
    );

    // Simulate click on the overlay (using the data-testid)
    fireEvent.click(screen.getByTestId('overlay'));
    expect(mockOnClose).toHaveBeenCalled();
  });
});
