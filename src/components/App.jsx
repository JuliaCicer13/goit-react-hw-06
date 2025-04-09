import { Layout } from '../Layout/Layout';
import { AppBar } from '../AppBar/AppBar';
import { ContactsForm } from '../components/ContactsForm';
import { ContactList } from '../components/ContactList';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <ContactsForm />
      <ContactList />
    </Layout>
  );
};
