import React, { useContext, useEffect, useState } from 'react';

interface AppContextProps {
  initialized: boolean;
  setInitialized: React.Dispatch<React.SetStateAction<boolean>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  tabIndex: string;
  setTabIndex: React.Dispatch<React.SetStateAction<string>>;

  statusMessage: string;
  setStatusMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = React.createContext<AppContextProps>(undefined!);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [initialized, setInitialized] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [tabIndex, setTabIndex] = useState<string>('image');
  const [statusMessage, setStatusMessage] = useState<string>('Ready');

  return (
    <AppContext.Provider
      value={{
        initialized,
        setInitialized,

        loading,
        setLoading,

        tabIndex,
        setTabIndex,

        statusMessage,
        setStatusMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
