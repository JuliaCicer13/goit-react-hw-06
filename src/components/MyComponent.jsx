// 1. Імпортуємо хук
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export default function MyComponent ()  {
  // 2. Отримуємо необхідну частину стану
  const value = useSelector(state => state.some.value);
    const dispatch = useDispatch();
};