import { useEffect, useState } from 'react';

const useData = (): { data: string, loading: boolean } => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData (): Promise<void> {
      const resp = await fetch('https://bartlomiejmendecki.gitlab.io/mitre/mitre.json');
      if (!resp.ok) {
        throw new Error(`Error occured: ${resp.status}`);
      }
      const result = await resp.json();
      if (typeof result === Object) {
        setData(result);
      }
      setLoading(false);
    }
    getData();
  }, []);

  return { data, loading };
};

export default useData;
