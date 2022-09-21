import * as Tooltip from '@radix-ui/react-tooltip';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from '../contexts/AuthContext';
import GlobalStyles from '../styles/globalStyles';
import theme from '../styles/tokens';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Tooltip.Provider>
          {getLayout(<Component {...pageProps} />)}
          <GlobalStyles />
        </Tooltip.Provider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
