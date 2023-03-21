import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layoutcomponent from '@/components/layout/Layout.component';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { wrapper } from '@/redux/store';
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Layoutcomponent>
      <Component {...pageProps} />
    </Layoutcomponent>
  )
}
export default wrapper.withRedux(App);
