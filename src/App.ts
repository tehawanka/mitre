
import { useData } from './lib/useData';
import Main from './components/Main/Main/Main';
import { ContextProvider } from './lib/Context';

function App() {
  const { data, loading } = useData();
  return (
    <ContextProvider>
      <Main data={data} isLoading={loading} />
    </ContextProvider>
  );
}
export default App;