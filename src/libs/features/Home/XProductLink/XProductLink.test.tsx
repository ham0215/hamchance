import { render, screen } from '@testing-library/react';

import { XProductLink } from './XProductLink';

describe('XProductLink', () => {
  it('renders X product link', () => {
    render(<XProductLink />);

    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://twitter.com/hamchance0215');
    expect(screen.getByText('@hamchance0215')).toBeInTheDocument();
  });

  it('renders QR button', () => {
    render(<XProductLink />);

    expect(screen.getByRole('button', { name: /show qr code/i })).toBeInTheDocument();
  });

  it('snapshot testing', () => {
    const { asFragment } = render(<XProductLink />);
    expect(asFragment()).toMatchSnapshot();
  });
});
