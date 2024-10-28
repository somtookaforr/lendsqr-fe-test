import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UsersTable from '../components/table';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('UsersTable Component', () => {
  test('renders UsersTable component', () => {
    render(<UsersTable />);
    expect(screen.getByText(/Filter Users/i)).toBeInTheDocument();
  });

  test('fetches and displays data from API', async () => {
    const mockUsers = [
      { id: 1, organization: 'Lendsqr', username: 'John Doe', email: 'john@example.com', phoneNumber: '123456789', dateJoined: '2023-01-01', status: 'Active' },
    ];
    mockedAxios.get.mockResolvedValueOnce({ data: mockUsers });

    render(<UsersTable />);
    
    await screen.findByText('John Doe');
  });

  test('opens options modal on click', () => {
    render(<UsersTable />);
    const optionsButton = screen.getAllByTestId('options-icon')[0];
    fireEvent.click(optionsButton);
    expect(screen.getByText(/View Details/i)).toBeInTheDocument();
  });
});
