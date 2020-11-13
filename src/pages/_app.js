import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from 'esducad-ui/dist/utils';
import { Layouts } from '../containers/';
import Head from 'next/head';
function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Layouts.MainLayout>
          <Component {...pageProps} />
        </Layouts.MainLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
