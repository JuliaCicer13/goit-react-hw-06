// 1. Імпортуємо хук
import { useSelector, useDispatch } from "react-redux";
// 2. Імпортуємо фабрику екшену
import { setStatusFilter } from "../../redux/actions";

export const StatusFilter = () => {
  // 3. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.status);

  // 4. Викликаємо фабрику екшену та передаємо значення фільтра
  // 5. Відправляємо результат - екшен зміни фільтра
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div>
      <button onClick={() => handleFilterChange("all")}>
        All
      </button>
      <button onClick={() => handleFilterChange("active")}>
        Active
      </button>
      <button onClick={() => handleFilterChange("completed")}>
        Completed
      </button>
    </div>
  );
};