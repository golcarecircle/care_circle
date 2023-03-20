import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layoutcomponent from '@/components/layout/Layout.component';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Layoutcomponent>
      <Component {...pageProps} />
    </Layoutcomponent>
  )
}
