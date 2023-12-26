import { Context } from '../../lib/Context';
import { useContext } from 'react';
import styles from './styles.module.scss';
import type { Area, Tactic } from '@/types';
import { Column } from '../Column/Column';

export const View = ({ navigator }: { navigator: Area[] }) => {
  const { category } = useContext(Context);
  const filterCat = (tactic: Tactic) => {
    return category === 0 ? tactic : tactic.category_id === category;
  };
  return (
    <div className={styles.wrapper}>
      {navigator.map((item) => {
        const data = item.tactics.filter(filterCat);
        return data.length ? (
          <div className={styles.panel} key={item.id}>
            <h3>{item.name}</h3>
            <div className={styles.columns}>
              {data.map((tactic: Tactic) => {
                return <Column key={tactic.id} tactic={tactic} />;
              })}
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
};
