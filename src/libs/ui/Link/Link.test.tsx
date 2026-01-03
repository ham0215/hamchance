import { render, screen } from '@testing-library/react';

import { Link } from './Link';

describe('Link', () => {
  it('renders link with correct href', () => {
    render(<Link href="/about">About</Link>);

    const link = screen.getByRole('link', { name: 'About' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/about');
  });

  it('snapshot testing', () => {
    const { asFragment } = render(<Link href="/about">About</Link>);
    expect(asFragment()).toMatchSnapshot();
  });
});
