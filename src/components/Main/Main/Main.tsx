import { CircularProgress } from '@mui/material';
import styles from './styles.module.scss';
import type { Data } from '@js/lib/useData';

type MainProps = {
  isLoading: boolean;
  data: Data;
};

const Main = ({ isLoading, data }: MainProps) => {
  return isLoading ? (
    <div className={styles.loader}>
      <CircularProgress />{' '}
    </div>
  ) : (
    <div className={styles.wrapper}></div>
  );
};

/* <Search />
       <Navigation categories={data.categories} />
       <View navigator={data.navigator} /> */

export default Main;
