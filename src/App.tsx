import React from 'react';
import { useData } from './lib/useData';
import Main from './components/Main/Main/Main';
import { ContextProvider } from './lib/Context';

const App = (): JSX.Element => {
  const { data, loading } = useData();

  console.log('loading', loading);
  console.log('data', data);

  return <div>test</div>;
  // return (
  //   <ContextProvider>
  //     <Main data={data} isLoading={loading} />
  //   </ContextProvider>
  // );
};

export default App;
