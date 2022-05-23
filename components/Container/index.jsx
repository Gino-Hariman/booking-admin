import Head from 'next/head';
import { forwardRef } from 'react';

const Container = ({ title, children, styles }) => {
  return (
    <div className={styles}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
};

export default Container;
