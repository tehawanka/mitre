import { CircularProgress } from '@mui/material';
import styles from './styles.module.scss';
import type { Data } from '@/lib/useData';
import { Navigation } from '../../Navigation/Navigation';
import { View } from '../../View/View';

type MainProps = {
  isLoading: boolean;
  data: Data;
};

export const Main = ({ isLoading, data }: MainProps) => {
  return isLoading ? (
    <div className={styles.loader}>
      <CircularProgress />
    </div>
  ) : (
    <div className={styles.wrapper}>
      <Navigation categories={data.categories} />
      <View navigator={data.navigator} />
    </div>
  );
};

/* <Search />
       <Navigation categories={data.categories} />
       <View navigator={data.navigator} /> */
