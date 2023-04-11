import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { wrapper } from '@/redux';
import { HealthTipsProvider } from '@/context/healthTips.context';
import Layout from '@/util/layout';
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <SessionProvider session={pageProps.session}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </SessionProvider>
  )
}
export default App;
