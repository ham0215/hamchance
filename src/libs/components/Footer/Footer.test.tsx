import { render } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer', () => {
  beforeAll(() => {
    // Mock Date to return a fixed year for consistent snapshots
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2000-01-01'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('renders copyright text', () => {
    const { getByText } = render(<Footer />);
    const currentYear = new Date().getFullYear();

    expect(getByText(`Copyright © Ham ${currentYear}.`)).toBeInTheDocument();
  });

  it('snapshot testing', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
