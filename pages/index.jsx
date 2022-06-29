import React from 'react';
import Head from 'next/head';

import HomePage from '../src/components/organisms/HomePage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio Agustín DVR</title>
        <meta name="description" content="Portfolio de Agustín DVR" />
        <link rel="icon" href="/favicon.ico" />
        <HomePage />
      </Head>
    </div>
  );
}
