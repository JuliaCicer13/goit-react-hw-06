import { ContactForm } from '../components/ContactForm';
import { ContactList }  from '../components/ContactList';
import SearchBox from '../components/SearchBox';

export default function App ()  {
  return (
    <>
      <SearchBox/>
      <ContactForm />
      <ContactList />
    </>
    
  );
};
