import classNames from 'clsx';
import type { Technique } from '@/types';
import { Context } from '../../lib/Context';
import { useContext, useState } from 'react';
import styles from './styles.module.scss';
import InfoIcon from '@mui/icons-material/Info';

export const Card = ({ technique }: { technique: Technique }) => {
  const { dataObject, setDataObject } = useContext(Context);
  const [value, setValue] = useState(0);

  const handleClick = () => {
    if (!dataObject[technique.id]) {
      const o = {
        ...dataObject,
        [technique.id]: { clicked: true, colorShade: 1 },
      };
      setDataObject(o);
      setValue(value + 1);
    } else {
      const colorShade = dataObject[technique.id].colorShade;
      const updated = colorShade >= 5 ? 0 : colorShade + 1;
      const o = {
        ...dataObject,
        [technique.id]: { clicked: true, colorShade: updated },
      };
      setDataObject(o);
      setValue(value + 1);
    }
  };

  return (
    <div
      className={classNames(
        styles.wrapper,
        styles[`shade${dataObject[technique.id]?.colorShade || 0}`],
      )}
      onClick={handleClick}
    >
      <p>{technique.name}</p>
      <InfoIcon className={styles.iconInfo} />
    </div>
  );
};
