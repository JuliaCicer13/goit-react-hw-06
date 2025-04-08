import css from './styles/App.module.css';
import StatusFilter from '../components/StatusFilter';
import MyComponent from "../components/MyComponent";
import TaskList from "../components/TaskList";
export default function App() {

  /* Остальной код */
  return (
    <div className={css.container}>
      <MyComponent />
      <StatusFilter />
      <TaskList/>
    </div>
  )
}

  