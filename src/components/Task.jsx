// 1. Імпортуємо хук
import { useDispatch } from "react-redux";
// 2. Імпортуємо фабрику екшену
import { deleteTask, toggleCompleted } from "../../redux/actions";

export const Task = ({ task }) => {
  // 3. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleDelete = () => {
	  dispatch(deleteTask(task.id))
  };

  // 4. Викликаємо фабрику екшену та передаємо ідентифікатор завдання
  // 5. Відправляємо результат - екшен перемикання статусу завдання
  const handleToggle = () => {
	  dispatch(toggleCompleted(task.id))
  };

  return (
    <div>
      <input 
	    type="checkbox" 
		onChange={handleToggle} 
		checked={task.completed} 
	  />
      <p>{task.text}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};