import { useContext, useEffect, useState, useRef } from 'react';

import { AppContext } from '../utils/AppContext';
import { ResourceImage } from './ResourceImage';
import { ResourceSticker } from './ResourceSticker';
import { ResourceText } from './ResourceText';
import { ResourceSettings } from './ResourceSettings';
import { ResourceAccount } from './ResourceAccount';

export const Resource = () => {
  const appCtx = useContext(AppContext);

  return (
    <>
      {appCtx.tabIndex === 'image' && <ResourceImage />}
      {appCtx.tabIndex === 'sticker' && <ResourceSticker />}
      {appCtx.tabIndex === 'text' && <ResourceText />}
      {appCtx.tabIndex === 'settings' && <ResourceSettings />}
      {appCtx.tabIndex === 'account' && <ResourceAccount />}
    </>
  );
};
