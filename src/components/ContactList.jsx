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

function ContactList ({onDelete})  {
    const contacts = useSelector((state) => state.contacts.status);
    const statusFilter = useSelector((state) => state.filters.status);
    const visibleContacts = getVisibleContacts(contacts, statusFilter);

    return (
        <ul>
            {visibleContacts.map((user) => (
                <li key={user.id} >
                    <Contacts
                          id={user.id}
                          name={user.name}
                          number={user.number}
                          onDelete={onDelete} />
                </li>
            ))}
        </ul>
    )
}