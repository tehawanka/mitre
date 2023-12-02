
import { useData } from './lib/useData';
import Main from './components/Main/Main';
import ContexProvider from './lib/Context';

function App() {
  const { data, loading } = useData();
  return (
    <ContexProvider>
      <Main data={data} isLoading={loading} />
    </ContexProvider>
  );
}
export default App;