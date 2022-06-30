import React from 'react';

import { Divider, Text, Heading, Box, Image } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <>
      <Box flexBasis="45%">
        <Heading
          as="h1"
          fontSize={{ base: '2.7rem', sm: '3.3em', md: '3.7rem', lg: '4rem' }}
          textAlign={['center', 'left']}
          fontFamily="Rampart"
        >
          Bienvenidxs a mi portfolio
        </Heading>
        <Text
          as="h2"
          fontSize={{ base: '1.5rem', sm: '1.3em', md: '1.7rem', lg: '2rem' }}
          mt="1em"
        >
          Soy Agustin Del Valle
        </Text>
        <Divider my="0.3em" maxW="xs" />
        <Text
          as="h3"
          fontSize={{ base: '1rem', sm: '1.3em', md: '1.7rem', lg: '2rem' }}
        >
          Frontend Developer
        </Text>
      </Box>
      <Box my={{ base: '1rem', sm: 0 }}>
        <Image
          src="/casual_3d.png"
          w={{ base: '200px', sm: '250px', md: '300px' }}
          h={{ base: '200px', sm: '250px', md: '300px' }}
        />
      </Box>
    </>
  );
};

export default HomePage;
