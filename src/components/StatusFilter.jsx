import { useSelector, useDisspatch } from 'react-redux';
import { Button } from '../components/Button';
import { setStatusFilter } from '../redux/filtersSlice';
import css from '../components/styles/StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.status);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === 'all'}
        onClick={() => handleFilterChange('all')}
      >
        All
      </Button>
      <Button
        selected={filter === 'active'}
        onClick={() => handleFilterChange('active')}
      >
        Active
      </Button>
      <Button
        selected={filter === 'completed'}
        onClick={() => handleFilterChange('completed')}
      >
        Completed
      </Button>
    </div>
  );
};
