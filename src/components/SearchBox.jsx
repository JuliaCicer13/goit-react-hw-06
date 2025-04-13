import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../redux/filtersSlice";
import { useId } from "react";
import styles from '../components/styles/SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);
  const labelFieldId = useId();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.wrap}>
      <label className={styles.label} htmlFor={labelFieldId}>Find contacts by name</label>
      <input
        className={styles.input}
        id={labelFieldId}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}