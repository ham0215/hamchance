import { PageLayout } from './PageLayout.layout';
import { render } from '@testing-library/react';

describe('PageLayout', () => {
  it('snapshot testing', () => {
    const { asFragment } = render(
      <PageLayout>
        <div>hoge</div>
      </PageLayout>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
