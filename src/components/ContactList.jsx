import { useSelector } from 'react-redux';
import Contacts from '../components/Contacts';
import styles from '../components/styles/ContactList.module.css';

const getVisibleContacts = (items, nameFilter) => {
    return items.filter(item =>
        item.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
        
};
 

export const ContactList = () => {
    const items= useSelector((state) => state.contacts.items);
    const nameFilter = useSelector((state) => state.filters.name);
    const visibleContacts = getVisibleContacts( items, nameFilter);

    return (
        <ul className={styles.list}>
            {visibleContacts.map(( item) => (
                <li key={ item.id} >
                    <Contacts contact={ item} />
                </li>
            ))}
        </ul>
    )
}