import { ReactNode, useContext, useEffect, useState } from 'react';

import {
  Flex,
  Text,
  Box,
  Avatar,
  AvatarBadge,
  Tooltip,
} from '@chakra-ui/react';
import { FiImage, FiSmile, FiType, FiSettings } from 'react-icons/fi';

import { AppContext } from '../utils/AppContext';

export const Sidebar = () => {
  const appCtx = useContext(AppContext);

  return (
    <Flex w="100%" h="100%" flexDirection="column">
      <Box h="30px" />
      <SidebarItem
        icon={<FiImage />}
        tooltip="Image"
        active={appCtx.tabIndex === 'image'}
        onClick={() => appCtx.setTabIndex('image')}
      />
      <SidebarItem
        icon={<FiSmile />}
        tooltip="Sticker"
        active={appCtx.tabIndex === 'sticker'}
        onClick={() => appCtx.setTabIndex('sticker')}
      />
      <SidebarItem
        icon={<FiType />}
        tooltip="Text"
        active={appCtx.tabIndex === 'text'}
        onClick={() => appCtx.setTabIndex('text')}
      />
      <SidebarItem
        icon={<FiSettings />}
        tooltip="Settings"
        active={appCtx.tabIndex === 'settings'}
        onClick={() => appCtx.setTabIndex('settings')}
      />
      <Box flex={1} />
      <SidebarItem
        icon={
          <Avatar size="sm" src="https://bit.ly/dan-abramov">
            <AvatarBadge boxSize="1em" bg="green.500" />
          </Avatar>
        }
        tooltip="Account"
        active={appCtx.tabIndex === 'account'}
        onClick={() => appCtx.setTabIndex('account')}
      />
      <Box h="30px" />
    </Flex>
  );
};

const SidebarItem = ({
  icon,
  tooltip,
  active = false,
  onClick,
}: {
  icon: ReactNode;
  tooltip: string;
  active?: boolean;
  onClick?: () => void;
}) => {
  return (
    <Tooltip label={tooltip}>
      <Flex
        w="50px"
        h="50px"
        justify="center"
        align="center"
        cursor="pointer"
        backgroundColor={active ? 'gray.600' : 'gray.800'}
        // _hover={{ opacity: 0.5 }}
        onClick={onClick}
      >
        {icon}
      </Flex>
    </Tooltip>
  );
};
