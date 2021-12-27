import PageLayout from '.';
import { render } from '@testing-library/react';

describe('Home', () => {
  it('snapshot testing', () => {
    const { asFragment } = render(<PageLayout><div>hoge</div></PageLayout>);
    expect(asFragment()).toMatchSnapshot();
  });
});
