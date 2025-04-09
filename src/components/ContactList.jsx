import { useSelector } from 'react-redux';
import { Contacts } from '../components/Contacts';

export default function getVisibleContacts(contacts, statusFilter) {
    switch (statusFilter) {
        case 'active':
            return contacts.filter((contacts) => !contacts.completed);
        case 'complited':
            return contacts.filter((contacts) => contacts.completed);
        default:
            return contacts;
        
  }
} 

function ContactList ()  {
    const contacts = useSelector((state) => state.contacts.status);
    const statusFilter = useSelector((state) => state.filters.status);
    const visibleContacts = getVisibleContacts(contacts, statusFilter);

    return (
        <ul>
            {visibleContacts.map((contact) => (
                <li key={contact.id}>
               <Contacts contacts={contact}/>
                </li>
            ))}
        </ul>
    )
}