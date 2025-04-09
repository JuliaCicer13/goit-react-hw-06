// 1. Імпортуємо хук
import { useDispatch } from "react-redux";

import { deleteContact} from "../redux/contactsSlice";

export const Contact = ({ contact }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
	  dispatch(deleteContact(contact.id))
  };


  return (
    <div>
      <input 
	    type="checkbox" 
		checked={contact.completed} 
	  />
      <p>{contact.text}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};