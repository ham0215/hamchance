import { render, screen } from '@testing-library/react';

import { Home } from './Home';

describe('Home', () => {
  it('renders a heading', async () => {
    render(<Home />);
    screen.getByRole('heading', {
      name: /Hamchance\.com/i,
    });
  });

  it('snapshot testing', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
