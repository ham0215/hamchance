import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from 'libs/createEmotionCache';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="登山とジョギング、子育てと株取引とお酒で忙しいWebエンジニアのポートフォリオ"
          />
          <link rel="apple-touch-icon" href="/apple-touch-icon.jpg" />
          <link rel="manifest" href="/manifest.json" />
          <meta property="og:title" content="Hamchance.com" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://hamchance.com/" />
          <meta property="og:image" content="https://hamchance.com/static/images/yarigadake.jpg" />
          <meta property="og:image:alt" content="槍ヶ岳" />
          <meta property="og:site_name" content="Hamchance.com" />
          <meta
            property="og:description"
            content="登山とジョギング、子育てと株取引とお酒で忙しいWebエンジニアのポートフォリオ"
          />
          <meta property="fb:app_id" content="2598739643727999" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@hamchance0215" />
          <meta name="twitter:creator" content="@hamchance0215" />
          <meta name="twitter:title" content="Hamchance.com" />
          <meta
            name="twitter:description"
            content="登山とジョギング、子育てと株取引とお酒で忙しいWebエンジニアのポートフォリオ"
          />
          <meta name="twitter:image" content="https://hamchance.com/static/images/yarigadake.jpg" />
          <meta name="twitter:image:alt" content="槍ヶ岳" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line
      enhanceApp: (App: any) => (props) => <App emotionCache={cache} {...props} />,
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
  };
};