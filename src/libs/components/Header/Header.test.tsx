import { render, screen } from '@testing-library/react';

import { Header } from './Header';

// Mock the TogglePaletteModeContext
jest.mock('providers/PaletteModeProvider', () => ({
  TogglePaletteModeContext: {
    _currentValue: jest.fn(),
  },
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
