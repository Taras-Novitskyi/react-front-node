import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { List, Item } from './ContactsList.styled';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      {visibleContacts.length > 0 && (
        <List>
          {visibleContacts.map(({ _id, name, phone }) => {
            return (
              <Item key={_id}>
                <ContactItem id={_id} name={name} phone={phone} />
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
};
