import { Button } from '../components/Button';
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";

export const ContactsForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    dispatch(addContact({
	    id: crypto.randomUUID(),
	    completed: false,
	    text: form.elements.text.value
	  }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </form>
  );
};