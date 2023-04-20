import "@/styles/globals.css";
import Providers from "@/component/provider";
import DashboardLayout from "@/layout/dashboard";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Providers>
      <DashboardLayout userType={"patient"}>
        <Component {...pageProps} />
      </DashboardLayout>
    </Providers>
  );
}
