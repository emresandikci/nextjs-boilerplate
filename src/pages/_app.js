import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from 'esducad-ui/dist/utils';
import { Layouts } from '../containers/';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Layouts.MainLayout>
        <Component {...pageProps} />
      </Layouts.MainLayout>
    </ThemeProvider>
  );
}

export default App;
