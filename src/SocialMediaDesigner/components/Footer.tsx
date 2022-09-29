import { useContext, useEffect, useState, useRef } from 'react';

import { Flex, Box, Text } from '@chakra-ui/react';
import { FiGithub, FiBell } from 'react-icons/fi';

import { AppContext } from '../utils/AppContext';

export const Footer = () => {
  const appCtx = useContext(AppContext);

  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      px="50px"
      bg="gray.700"
      experimental_spaceX="20px"
    >
      <Text color="gray">[ Info ]: {appCtx.statusMessage}</Text>
      <Box flex={1} />
      <FiGithub color="gray" />
      <FiBell color="gray" />
    </Flex>
  );
};
