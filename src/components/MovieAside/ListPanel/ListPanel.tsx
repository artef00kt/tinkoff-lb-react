import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../Button/Button';
import {MovieContext} from '../../../context/MovieContext';
import styles from './ListPanel.module.scss';

export const ListPanel = () => {
  const {movies} = useContext(MovieContext);
  const navigate = useNavigate();

  return (
    <div className={styles.panel}>
      <span className={styles.info}>Найдено {movies.length} элементов</span>
      <Button onClick={() => navigate(`/movie/create`)}>+ Добавить</Button>
    </div>
  );
};

export default ListPanel;
