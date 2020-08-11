import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro';

const Content = styled.div`
  max-width: 760px;
  margin: 0 auto 0 auto;
`;

const TermsOfService = lazy(() => import(/* webpackChunkName: 'terms-of-service' */ './TermsOfService'));
const PrivacyPolicy = lazy(() => import(/* webpackChunkName: 'privacy-policy' */ './PrivacyPolicy'));

export default function Terms() {
  return (
    <Content>
      <Switch>
        <Route path="/terms/terms-of-service" exact component={TermsOfService} />
        <Route path="/terms/privacy-policy" exact component={PrivacyPolicy} />
      </Switch>
    </Content>
  );
}
