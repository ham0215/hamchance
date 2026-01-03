import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { QrButton } from './QrButton';

describe('QrButton', () => {
  it('renders button with QR code icon', () => {
    const onClick = jest.fn();
    render(<QrButton onClick={onClick} />);

    expect(screen.getByRole('button', { name: /show qr code/i })).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();
    render(<QrButton onClick={onClick} />);

    const button = screen.getByRole('button', { name: /show qr code/i });
    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('snapshot testing', () => {
    const onClick = jest.fn();
    const { asFragment } = render(<QrButton onClick={onClick} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
