import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header } from './Header';

// Mock the TogglePaletteModeContext with a proper React context
jest.mock('providers/PaletteModeProvider', () => ({
  TogglePaletteModeContext: React.createContext(jest.fn()),
}));

describe('Header', () => {
  it('renders header with title', () => {
    render(<Header />);

    expect(screen.getByText('Hamchance.com')).toBeInTheDocument();
  });

  it('renders theme toggle button', () => {
    render(<Header />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('snapshot testing', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
