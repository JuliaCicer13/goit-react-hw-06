import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';

export default function getVisibleTask(tasks, statusFilter) {
    switch (statusFilter) {
        case 'active':
            return tasks.filter((tasks) => !task.completed);
        case 'complited':
            return tasks.filter((tasks) => task.completed);
        default:
            return tasks;
        
  }
} 

export function TaskList {
    const tasks = useSelector((state) => state.tasks.status);
    const statusFilter = useSelector((state) => state.filters.status);
    const visibleTasks = getVisibleTask(tasks, statusFilter);

    return (
        <ul>
            {visibleTasks.map((task) => (
                <li key={task.id}>
               <Task task={task}/>
                </li>
            ))}
        </ul>
    )
}