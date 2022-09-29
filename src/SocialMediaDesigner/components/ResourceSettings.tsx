import { useContext, useEffect, useState, useRef } from 'react';

import { Flex, Text, Select } from '@chakra-ui/react';

export const ResourceSettings = () => {
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
        Settings
      </Text>

      <Select placeholder="Select option" mb="10px">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </Flex>
  );
};
