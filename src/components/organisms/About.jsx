import React, { useState } from 'react';

import { Box, Button, Heading, Text } from '@chakra-ui/react';

const About = () => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <Box
      background="rgba( 61, 58, 80, 0.2 )"
      boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
      backdropFilter="blur( 0px )"
      borderRadius="10px"
      border="1px solid rgba( 255, 255, 255, 0.18 )"
      mt="3rem"
      p="2rem"
      textAlign="center"
    >
      <Heading
        as="h3"
        fontSize={{ base: '2.7rem', sm: '3.3em', md: '3.7rem', lg: '4rem' }}
        textAlign={['center', 'left']}
        fontFamily="Rampart"
        mb="1rem"
      >
        Quien soy?
      </Heading>
      <Text
        fontFamily="roboto"
        textAlign="justify"
        mx={{ base: '2rem', sm: '0' }}
        lineHeight="5"
      >
        Las respuestas son muchas y variadas, hay un yo plomero-gasista, un yo
        cadete, uno papá, uno compañero, y también uno desarrollador. Obviamente
        este último es en el que nos interesa profundizar. Por una u otra razón
        siempre trabajé rodeado de gente, me gusta hacerlo y promuevo mucho el
        co-working. Disfruto mucho de aprender, cuando una duda se transforma en
        una certeza, se acomodan las estanterías y me siento a descansar un
        poco.
      </Text>
      <Button
        backgroundColor="var(--principal-bg-hover)"
        color="var(--principal-text-color)"
        onClick={() => setViewMore(true)}
        hidden={viewMore}
        size="sm"
        my="1rem"
      >
        Ver más
      </Button>
      <Text
        fontFamily="roboto"
        textAlign="justify"
        mx={{ base: '2rem', sm: '0' }}
        hidden={!viewMore}
        lineHeight="5"
      >
        Nunca me quedo quieto, siempre voy pensando cómo mejorar algo que me
        rodea, soy proactivo, curioso y muy entusiasta. Tengo grandes
        habilidades comunicacionales, me destaco en perseverancia y en capacidad
        resolutiva. En fin, soy un gran candidato con grandes capacidades, con
        muchas ganas de superarse y de contribuir.
      </Text>
    </Box>
  );
};

export default About;
