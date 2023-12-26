import { createContext, useState } from 'react';

type ContextType = {
  category: number;
  phrase: string;
  dataObject: Record<string, unknown>;
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  setPhrase: React.Dispatch<React.SetStateAction<string>>;
  setDataObject: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
};

export const Context = createContext<ContextType>({
  category: 1,
  phrase: '',
  dataObject: {},
  setCategory: () => {},
  setPhrase: () => {},
  setDataObject: () => {},
});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [category, setCategory] = useState(1);
  const [phrase, setPhrase] = useState('');
  const [dataObject, setDataObject] = useState({});
  const value = {
    category,
    phrase,
    dataObject,
    setCategory,
    setPhrase,
    setDataObject,
  };
  const Provider = Context.Provider;
  return <Provider value={value}>{children}</Provider>;
};
