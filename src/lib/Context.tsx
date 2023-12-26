import { createContext, useState } from 'react';

type DataObject = {
  clicked: boolean;
  colorShade: number;
};

type ContextType = {
  category: number;
  phrase: string;
  dataObject: { clicked: boolean; colorShade: number };
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  setPhrase: React.Dispatch<React.SetStateAction<string>>;
  setDataObject: React.Dispatch<React.SetStateAction<DataObject>>;
};

export const Context = createContext<ContextType>({
  category: 1,
  phrase: '',
  dataObject: { clicked: false, colorShade: 0 },
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
  const [dataObject, setDataObject] = useState({
    clicked: false,
    colorShade: 0,
  });
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
