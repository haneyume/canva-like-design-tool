import { useContext, useEffect, useState, useRef } from 'react';

import { Flex, Text, Tooltip } from '@chakra-ui/react';

export const ResourceText = () => {
  return (
    <Flex
      w="100%"
      minH="100%"
      flexDirection="column"
      bg="gray.600"
      px="10px"
      py="20px"
    >
      <Text fontSize="xl" fontWeight="bold" mb="10px">
        Text
      </Text>
    </Flex>
  );
};
