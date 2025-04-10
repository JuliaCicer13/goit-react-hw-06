import { AppBar } from '../components/AppBar';
import { ContactsForm } from '../components/ContactsForm';
import { ContactList }  from '../components/ContactList';

export default function App ()  {
  return (
    <>
      <AppBar />
      <ContactsForm />
      <ContactList />
    </>
    
  );
};
