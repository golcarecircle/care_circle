import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import MainLayout from '@/util/Layout';
import DashboardLayout from './dashboard/layout';
import { wrapper } from '@/redux';
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps, router }: AppPropsWithLayout) {
  const isDashboardPage = router.pathname.startsWith('/dashboard');
  const Layout = isDashboardPage ? DashboardLayout : MainLayout;
  
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default wrapper.withRedux(App);
