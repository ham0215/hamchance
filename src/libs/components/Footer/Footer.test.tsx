import { render } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer', () => {
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
