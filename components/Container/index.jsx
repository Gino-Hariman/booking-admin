import Head from 'next/head';
import { forwardRef } from 'react';

const Container = forwardRef(
  ({ children, title = '', styles, ...other }, ref) => (
    <div className={`container ${styles}`} ref={ref} {...other}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  )
);

export default Container;
