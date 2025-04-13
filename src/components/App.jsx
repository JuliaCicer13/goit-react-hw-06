import { ContactsForm } from '../components/ContactsForm';
import { ContactList }  from '../components/ContactList';
import SearchBox from '../components/SearchBox';

export default function App ()  {
  return (
    <>
      <SearchBox/>
      <ContactsForm />
      <ContactList />
    </>
    
  );
};
