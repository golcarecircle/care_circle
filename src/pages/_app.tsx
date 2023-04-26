import { Provider } from "react-redux";
import store from "@/store";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import Providers from "@/component/provider";
import DashboardLayout from "@/layout/dashboard";
import type { AppProps } from "next/app";
import { HealthTipsProvider } from "@/context/healthTips.context";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isPatientOrDoctorRoute =
    router.pathname.startsWith("/patient") ||
    router.pathname.startsWith("/doctor");

  return (
    <Provider store={store}>
      <Providers>
        {isPatientOrDoctorRoute ? (
          <DashboardLayout userType={router.pathname.split("/")[1]}>
            <HealthTipsProvider>
              <Component {...pageProps} />
            </HealthTipsProvider>
          </DashboardLayout>
        ) : (
          <HealthTipsProvider>
            <Component {...pageProps} />
          </HealthTipsProvider>
        )}
      </Providers>
    </Provider>
  );
}
