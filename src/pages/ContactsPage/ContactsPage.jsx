import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton, Box } from '@mui/material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Fillter/Fillter';
import { Loader } from 'components/Loader/Loader';
import { fetchContacts } from 'redux/operation';
import { selectError, selectIsLoading, selectContacts } from 'redux/selectors';

const ContactsView = () => {
  const [addContact, setAddContact] = useState(false);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    setAddContact(false);
  }, [dispatch]);

  const handleAddContact = () => {
    setAddContact(true);
    // setAddContact(addContact => !addContact);
  };

  const closeForm = () => {
    setAddContact(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: '50%' }}>
        {contacts.length > 0 ? (
          <Section title="Your contacts">
            {!isLoading && !error && <Filter />}
            {isLoading && !error && <Loader />}
            <ContactsList />
          </Section>
        ) : (
          <Section title="You have no contacts">
            {isLoading && !error && <Loader />}
          </Section>
        )}
      </Box>
      {
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            width: '50%',
          }}
        >
          {!addContact && (
            <Box sx={{ mt: 2 }}>
              <Box
                sx={{
                  display: 'inline-block',
                  fontSize: 24,
                  fontWeight: 700,
                  color: 'rgb(100, 100, 100)',
                  mr: 4,
                }}
              >
                Add contact
              </Box>
              <IconButton
                type="button"
                onClick={handleAddContact}
                sx={{ mt: 0, p: 0 }}
              >
                <LibraryAddIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Box>
          )}

          {addContact && (
            <Section title="Phonebook">
              <ContactForm onSubmit={closeForm} />
            </Section>
          )}
        </Box>
      }
    </Box>
  );
};

export default ContactsView;
