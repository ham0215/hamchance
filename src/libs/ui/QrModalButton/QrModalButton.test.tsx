import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { QrModalButton } from './QrModalButton';

describe('QrModalButton', () => {
  const testSrc = '/test-qr.png';

  it('renders QR button', () => {
    render(<QrModalButton src={testSrc} />);

    expect(screen.getByRole('button', { name: /show qr code/i })).toBeInTheDocument();
  });

  it('opens modal when button is clicked', async () => {
    const user = userEvent.setup();
    render(<QrModalButton src={testSrc} />);

    const button = screen.getByRole('button', { name: /show qr code/i });
    await user.click(button);

    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  it('closes modal when modal close is triggered', async () => {
    const user = userEvent.setup();
    render(<QrModalButton src={testSrc} />);

    const button = screen.getByRole('button', { name: /show qr code/i });
    await user.click(button);

    expect(screen.getByRole('presentation')).toBeInTheDocument();

    // Click outside the modal to close it (Material-UI Modal behavior)
    const backdrop = screen.getByRole('presentation').firstChild;
    if (backdrop) {
      await user.click(backdrop as Element);
    }

    expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
  });
});
