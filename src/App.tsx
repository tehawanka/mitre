import React from 'react';
import { useData } from './lib/useData';

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
