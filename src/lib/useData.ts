import { Area, Category } from '@js/types';
import { useEffect, useState } from 'react';

export type Data = { categories: Category[]; navigator: Area[] };

export const useData = (): { data: Data; loading: boolean } => {
  const [data, setData] = useState<Data>({ categories: [], navigator: [] });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getData(): Promise<void> {
      try {
        const resp = await fetch(
          'https://bartlomiejmendecki.gitlab.io/mitre/mitre.json',
        );
        if (!resp.ok) {
          throw new Error(`Error occurred: ${resp.status}`);
        }
        const result = (await resp.json()) as Data;
        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  return { data, loading };
};
