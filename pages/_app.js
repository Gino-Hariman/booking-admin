import DashboardTabProvider from '@/context/DashboardTabContext';
import { Suspense, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
// import { QueryClient, QueryClientProvider } from 'react-query';
import { Slide, ToastContainer } from 'react-toastify';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from '@/context/AuthenticationContext';
import ProtectedRoutes from '@/axios/ProtectedRoutes';
import { LoadingModal } from '@/components/Loading';

function MyFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  // const [showChild, setShowChild] = useState(false);
  const [queryClient] = useState(() => new QueryClient());
  // const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       refetchOnWindowFocus: false,
  //       refetchOnmount: false,
  //       refetchOnReconnect: false,
  //       retry: false,
  //       // staleTime: 5 * 60 * 1000,
  //     },
  //   },
  // });
  const Layout =
    Component.layout ||
    (({ children }) => {
      children;
    });

  useEffect(() => {
    // setShowChild(true);

    const jssStyle = document.querySelector('#jss-server-side');
    if (jssStyle) {
      jssStyle.parentElement.removeChild(jssStyle);
    }
  }, []);

  // if (!showChild) {
  //   return null;
  // }

  // if (typeof window === 'undefined') {
  //   return <></>;
  // }

  return (
    <ErrorBoundary FallbackComponent={MyFallbackComponent}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ProtectedRoutes>
            <DashboardTabProvider>
              <Layout>
                <Suspense fallback={<LoadingModal title="Loading ...." />}>
                  <Component {...pageProps} />
                </Suspense>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </Layout>
            </DashboardTabProvider>
          </ProtectedRoutes>
        </AuthProvider>

        {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  // ctx.store.dispatch({})
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};

export default MyApp;
