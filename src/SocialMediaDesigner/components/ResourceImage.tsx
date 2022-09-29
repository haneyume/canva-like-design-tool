import { useContext, useEffect, useState, useRef } from 'react';

import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { Masonry } from 'masonic';
import axios from 'axios';

import { addImage } from '../utils/controller';

export const ResourceImage = () => {
  const [search, setSearch] = useState<string>('');
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_EDGE_API_URL;
    const url = `${baseUrl}/api/unsplash/photos?search=${search}`;

    axios.get(url).then((response) => {
      setImages(response.data);
    });
  }, [search]);

  const renderContent = () => {
    return (
      <Masonry
        key={search}
        columnCount={3}
        columnGutter={5}
        items={images}
        render={({ index, data }) => {
          return (
            <div
              key={index}
              style={{ cursor: 'pointer' }}
              onClick={() => addImage(data.thumb)}
            >
              <img src={data.thumb} />
            </div>
          );
        }}
      />
    );
  };

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
        Image
      </Text>

      <InputGroup mb="10px">
        <InputLeftElement pointerEvents="none" children={<FiSearch />} />
        <Input
          type="tel"
          placeholder="Search"
          value={search}
          onChange={(evt) => setSearch(evt.target.value)}
        />
      </InputGroup>

      {images.length > 0 ? (
        renderContent()
      ) : (
        <Flex h="200px" justify="center" align="center">
          <Spinner />
        </Flex>
      )}
    </Flex>
  );
};
