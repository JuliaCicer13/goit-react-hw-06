// 1. Імпортуємо хук
import { useDispatch } from "react-redux";
import { deleteContact} from "../redux/contactsSlice";
import styles from '../components/styles/Contacts.module.css';
import { GiVampireCape, GiFangs } from "react-icons/gi";

export default function Contacts({ items, id, name, number}) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact( items.id));

 return (
  <li className={styles.item}>
    <div className={styles.container}>
    <p className={styles.name}><GiVampireCape className={styles.info}/> {name}</p>
    <p className={styles.number}> <GiFangs className={styles.icon}/> {number}</p> 
    </div>
   
    <button onClick={() =>
      handleDelete(id)} className={styles.button} type='submit'>Delete</button> 
  </li>
        )
}