import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import '../styles/globals.css';

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
  const Layout =
    Component.layout ||
    (({ children }) => {
      children;
    });

  useEffect(() => {
    const jssStyle = document.querySelector('#jss-server-side');
    if (jssStyle) {
      jssStyle.parentElement.removeChild(jssStyle);
    }
  }, []);

  return (
    <ErrorBoundary FallbackComponent={MyFallbackComponent}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
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
