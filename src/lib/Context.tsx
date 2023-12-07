import { createContext, useState } from "react";

export const Context = createContext({
    category: 1,
    phrase: '',
    dataObject: {},
    setCategory: () => { },
    setPhrase: () => { },
    setDataObject: () => { }
});

export const ContextProvider = ({ children }) => {
    const [category, setCategory] = useState(1);
    const [phrase, setPhrase] = useState('')
    const [dataObject, setDataObject] = useState({})
    const value = {
        category,
        phrase,
        dataObject,
        setCategory,
        setPhrase,
        setDataObject

     };
    const Provider = Context.Provider;
    return <Provider value={value}>{children}</Provider>)
}
