import React from 'react';
import Head from 'next/head';

import HomePage from '../src/components/organisms/HomePage';
import { Container, Flex } from '@chakra-ui/react';
import About from '../src/components/organisms/About';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Agustín DVR</title>
        <meta name="description" content="Portfolio de Agustín DVR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        maxW="4xl"
        my={{ base: '1rem', sm: '1.3rem', md: '2rem', lg: '5rem' }}
      >
        <Flex
          flexFlow="row wrap"
          justifyContent="space-around"
          alignItems="center"
        >
          <HomePage />
          <About />
        </Flex>
      </Container>
    </>
  );
}
