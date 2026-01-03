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

  it('renders modal with onClose handler', () => {
    const handleClose = jest.fn();
    render(<QrModal open={true} onClose={handleClose} />);

    expect(screen.getByRole('presentation')).toBeInTheDocument();
    expect(screen.getByAltText('QR')).toBeInTheDocument();
  });

  it('snapshot testing - open', () => {
    const { baseElement } = render(<QrModal open={true} />);

    // Remove dynamic padding-right from Material-UI scroll lock for stable snapshots
    const bodyElement = baseElement.querySelector('body');
    if (bodyElement) {
      const style = bodyElement.getAttribute('style');
      if (style) {
        const cleanStyle = style.replace(/padding-right:\s*\d+px;?\s*/, '').trim();
        if (cleanStyle) {
          bodyElement.setAttribute('style', cleanStyle);
        } else {
          bodyElement.removeAttribute('style');
        }
      }
    }

    expect(baseElement).toMatchSnapshot();
  });

  it('snapshot testing - closed', () => {
    const { baseElement } = render(<QrModal open={false} />);
    expect(baseElement).toMatchSnapshot();
  });
});
