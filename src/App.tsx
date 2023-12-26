import React from 'react';
import { useData } from './lib/useData';
import { ContextProvider } from './lib/Context';
import { Main } from './components/Main/Main/Main';

const App = (): JSX.Element => {
  const { data, loading } = useData();

  return (
    <ContextProvider>
      <Main data={data} isLoading={loading} />
    </ContextProvider>
  );
};

export default App;
