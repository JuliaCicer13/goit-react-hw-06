import { useSelector } from 'react-redux';
import  Contacts from '../components/Contacts';

const getVisibleContacts = ( items, statusFilter) => {
    switch (statusFilter) {
        case 'active':
            return  items.filter(( items) => ! items.completed);
        case 'complited':
            return  items.filter(( items) =>  items.completed);
        default:
            return  items;
        
  }
} 

export const ContactList = () => {
    const items= useSelector((state) => state.items.status);
    const statusFilter = useSelector((state) => state.filters.status);
    const visibleContacts = getVisibleContacts( items, statusFilter);

    return (
        <ul>
            {visibleContacts.map(( item) => (
                <li key={ item.id} >
                    <Contacts contact={ item} />
                </li>
            ))}
        </ul>
    )
}