import { useContext, useEffect, useState, useRef } from 'react';

import { Flex, Box, Text, Tooltip } from '@chakra-ui/react';
import { FiHexagon } from 'react-icons/fi';

export const Header = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      px="50px"
      experimental_spaceX="16px"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
    >
      <FiHexagon fontSize={24} />
      <Text fontSize="2xl" fontWeight="bold">
        Social Media Designer
      </Text>

      <Box flex={1} />
      <Tooltip label="Coming soon">
        <Text cursor="pointer">Doc</Text>
      </Tooltip>
      <Tooltip label="Coming soon">
        <Text cursor="pointer">Pricing</Text>
      </Tooltip>
    </Flex>
  );
};
