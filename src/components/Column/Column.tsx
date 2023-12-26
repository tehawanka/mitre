import { Context } from '../../lib/Context';
import { useContext } from 'react';
import styles from './styles.module.scss';
import type { Tactic, Technique } from '@/types';
import { Card } from '../Card/Card';

export const Column = ({ tactic }: { tactic: Tactic }) => {
  const { phrase } = useContext(Context);
  const filterTech = (tech: Technique) => {
    if (phrase) {
      return tech.name.startsWith(phrase);
    }
    return tech;
  };

  return (
    <div className={styles.column}>
      <h4>{tactic.name}</h4>
      {tactic.techniques.filter(filterTech).map((tech) => (
        <Card key={tech.id} technique={tech} />
      ))}
    </div>
  );
};
