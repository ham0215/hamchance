import Home from '.';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders a heading', async () => {
    render(<Home />);
    screen.getByRole('heading', {
      name: /Hamchance\.com/i,
    });
  });

  test('snapshot testing', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});