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
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <Item key={id}>
                <ContactItem id={id} name={name} number={number} />
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
};
