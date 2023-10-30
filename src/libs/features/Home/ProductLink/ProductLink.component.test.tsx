import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ProductLink } from './ProductLink.component';

describe('ProductLink', () => {
  it('when set onClickQr, then QR code will be displayed', () => {
    const { asFragment } = render(
      <ProductLink href="https://hamchance.com" productName="hamchance" name="@ham" onClickQr={jest.fn()} />
    );

    expect(screen.getByText('hamchance')).toBeInTheDocument();
    expect(screen.getByTestId('QrCode2Icon')).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it('when set onClickQr, then QR code will be not displayed', () => {
    const { asFragment } = render(<ProductLink href="https://hamchance.com" productName="hamchance" name="@ham" />);
    expect(screen.getByText('hamchance')).toBeInTheDocument();
    expect(screen.queryByTestId('QrCode2Icon')).not.toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it('when click QR code, call onClickQr', async () => {
    const onClickQr = jest.fn();
    const user = userEvent.setup();
    render(<ProductLink href="https://hamchance.com" productName="hamchance" name="@ham" onClickQr={onClickQr} />);

    act(() => {
      user.click(screen.getByTestId('QrCode2Icon'));
    });

    await waitFor(() => {
      expect(onClickQr).toHaveBeenCalledTimes(1);
    });
  });
});
