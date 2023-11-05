import { Footer } from 'libs/components/Footer';
import { Header } from 'libs/components/Header';
import { Metadata } from 'next';
import PaletteModeProvider from 'providers/PaletteModeProvider';
import { ThemeRegistry } from 'providers/ThemeProvider';

export const metadata: Metadata = {
  title: 'Hamchance.com',
  description: '登山とジョギング、子育てと株取引とお酒で忙しいWebエンジニアのポートフォリオ',
  manifest: '/manifest.json',
  openGraph: {
    title: 'Hamchance.com',
    type: 'website',
    url: 'https://hamchance.com',
    images: {
      url: 'https://hamchance.com/static/images/yarigadake.jpg',
      alt: '槍ヶ岳',
    },
    description: '登山とジョギング、子育てと株取引とお酒で忙しいWebエンジニアのポートフォリオ',
    siteName: 'Hamchance.com',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@hamchance0215',
    creator: '@hamchance0215',
    title: 'Hamchance.com',
    description: '登山とジョギング、子育てと株取引とお酒で忙しいWebエンジニアのポートフォリオ',
    images: {
      url: 'https://hamchance.com/static/images/yarigadake.jpg',
      alt: '槍ヶ岳',
    },
  },
};

export const viewport = {
  themeColor: '#000000',
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta property="fb:app_id" content="2598739643727999" />
      </head>
      <body>
        <PaletteModeProvider>
          <ThemeRegistry options={{ key: 'mui' }}>
            <Header />
            {children}
            <Footer />
          </ThemeRegistry>
        </PaletteModeProvider>
      </body>
    </html>
  );
}
