import { useContext, useEffect, useState, useRef } from 'react';

import { Flex } from '@chakra-ui/react';

import { initCanvas } from '../utils/controller';

export const Main = () => {
  useEffect(() => {
    initCanvas('canvas', 400, 300);
  }, []);

  return (
    <Flex
      className="bg-pattern"
      w="100%"
      h="100%"
      justify="center"
      align="center"
    >
      <canvas key="canvas" id="canvas" width={400} height={300} />
    </Flex>
  );
};
