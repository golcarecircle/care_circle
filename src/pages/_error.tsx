import { ReactElement } from 'react';
import { NextPage, NextPageContext } from 'next';
import ErrorPage from 'next/error';
import MainLayout from '@/util/Layout';
import DashboardLayout from './dashboard/layout';

type ErrorProps = {
  statusCode: number;
  isDashboardPage?: boolean;
};

const CustomErrorPage: NextPage<ErrorProps> = ({ statusCode, isDashboardPage = false }) => {
  return (
    <ErrorPage statusCode={statusCode}/>
  );
};

const Error: NextPage<ErrorProps> = ({ statusCode, isDashboardPage }: ErrorProps): ReactElement => {
  const Layout = isDashboardPage ? DashboardLayout : MainLayout;

  return (
    <Layout>
      <CustomErrorPage statusCode={statusCode} />
    </Layout>
  );
};

Error.getInitialProps = ({ res, err, asPath }: NextPageContext): ErrorProps => {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  const isDashboardPage = asPath?.startsWith('/dashboard');

  return { statusCode, isDashboardPage };
};

export default Error;
