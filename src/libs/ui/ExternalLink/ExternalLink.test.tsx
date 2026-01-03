import { render, screen } from '@testing-library/react';

import { ExternalLink } from './ExternalLink';

describe('ExternalLink', () => {
  it('renders link with correct href', () => {
    render(<ExternalLink href="https://example.com">Example Link</ExternalLink>);

    const link = screen.getByRole('link', { name: 'Example Link' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('snapshot testing', () => {
    const { asFragment } = render(<ExternalLink href="https://example.com">Example Link</ExternalLink>);
    expect(asFragment()).toMatchSnapshot();
  });
});
