import { useContext, useEffect, useState, useRef } from 'react';

import { Flex, Text, Avatar, AvatarBadge } from '@chakra-ui/react';
import { FiUser, FiMail, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { MdMale } from 'react-icons/Md';
import axios from 'axios';

export const ResourceAccount = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const baseUrl = 'https://randomuser.me/api';
    const url = `${baseUrl}?results=1`;

    axios.get(url).then((response) => {
      setUsers(response.data.results);
    });
  }, []);

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
        Account
      </Text>

      <Flex justify="center" mt="30px" mb="20px">
        <Avatar size="xl" src="https://bit.ly/dan-abramov">
          <AvatarBadge boxSize="1em" borderColor="gray.600" bg="green.500" />
        </Avatar>
      </Flex>

      <Flex align="center" experimental_spaceX="10px" mb="10px">
        <FiUser />
        <Text fontSize="xl" fontWeight="bold">
          Peter Chen
        </Text>
        <MdMale
          style={{
            color: 'white',
            background: '#3498DB',
            borderRadius: '100%',
            padding: '2px',
          }}
        />
      </Flex>

      <Flex align="center" experimental_spaceX="10px">
        <FiMail color="darkgray" />
        <Text color="darkgray">demo.user@mail.com</Text>
      </Flex>

      <Flex align="center" experimental_spaceX="10px">
        <FiLinkedin color="darkgray" />
        <Text color="darkgray">@demo.user</Text>
      </Flex>

      <Flex align="center" experimental_spaceX="10px">
        <FiTwitter color="darkgray" />
        <Text color="darkgray">@demo</Text>
      </Flex>

      <Flex mt="20px">
        <iframe
          src="https://maps.google.com/maps?q=台中&z=16&output=embed"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </Flex>
    </Flex>
  );
};
