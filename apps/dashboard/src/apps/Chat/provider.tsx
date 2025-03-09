import React, { useContext, createContext } from 'react';

export interface IContext {

}

export interface IProvider {
  children: React.ReactNode;
}

export const ChatContext = createContext<IContext | undefined>(undefined);

export const ChatProvider: React.FC<IProvider> = ({
  children
}) => {
  return (
    <>
      <ChatContext.Provider
        value={{}}
      >
        {children}
      </ChatContext.Provider>
    </>
  )
}

export const useChatApi = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error(`useChatApi must be wrapped in ChatProvider`);
  }

  return context;
}