import Head from 'next/head';
import { AppProps } from 'next/app';
import ThemeProvider from 'providers/ThemeProvider';
import PaletteModeProvider from 'providers/PaletteModeProvider';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from 'libs/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Hamchance.com</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <PaletteModeProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </PaletteModeProvider>
    </CacheProvider>
  );
}
