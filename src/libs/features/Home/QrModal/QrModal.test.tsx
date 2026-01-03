import { render, screen } from '@testing-library/react';

import { QrModal } from './QrModal';

describe('QrModal', () => {
  it('renders modal when open is true', () => {
    render(<QrModal open={true} />);

    expect(screen.getByRole('presentation')).toBeInTheDocument();
    expect(screen.getByAltText('QR')).toBeInTheDocument();
  });

  it('does not render modal when open is false', () => {
    render(<QrModal open={false} />);

    expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
  });

  it('snapshot testing - open', () => {
    const { asFragment } = render(<QrModal open={true} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('snapshot testing - closed', () => {
    const { asFragment } = render(<QrModal open={false} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
