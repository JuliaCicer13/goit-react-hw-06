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
      name: form.elements.name.value,
	    number: form.elements.number.value
	  }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter task text..." />
      <input type="text" name="number" placeholder="Enter number..."/>
      <Button type="submit">Add contact</Button>
    </form>
  );
};