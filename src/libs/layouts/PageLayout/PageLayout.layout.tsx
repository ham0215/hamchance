import { PropsWithChildren } from 'react';

import { Footer } from './components/Footer';
import { Header } from './components/Header';

export function PageLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
