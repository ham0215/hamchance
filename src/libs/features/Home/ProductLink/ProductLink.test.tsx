import { render, screen } from '@testing-library/react';

import { ProductLink } from './ProductLink';

describe('ProductLink', () => {
  it('renders product link with correct content', () => {
    const { asFragment } = render(<ProductLink href="https://hamchance.com" productName="hamchance" name="@ham" />);

    expect(screen.getByText('hamchance')).toBeInTheDocument();
    expect(screen.getByText('@ham')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
