import React from 'react';
import { useData } from './lib/useData';
import Main from './components/Main/Main/Main';
import { ContextProvider } from './lib/Context';

const App = () => {
  const { data, loading } = useData();
  return <div>test</div>;
  // return (
  //   <ContextProvider>
  //     <Main data={data} isLoading={loading} />
  //   </ContextProvider>
  // );
};

export default App;
