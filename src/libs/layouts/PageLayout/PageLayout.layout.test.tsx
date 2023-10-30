import { render } from '@testing-library/react';

import { PageLayout } from './PageLayout.layout';

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
