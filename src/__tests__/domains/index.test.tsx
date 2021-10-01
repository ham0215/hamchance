import Home from '../../domains/Home';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders a heading', async () => {
    render(<Home />);
    screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });
  });
});
