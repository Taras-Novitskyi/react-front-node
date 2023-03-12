import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Box, TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import { addContact } from 'redux/operation';
import { Form } from './ContactForm.styled';

export function ContactForm({ onSubmit }) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const inputNumber = event.target.elements.number.value;
    let number = inputNumber;
    if (inputNumber.length <= 7) {
      number =
        inputNumber.substr(0, 3) +
        '-' +
        inputNumber.substr(3, 2) +
        '-' +
        inputNumber.substr(4, 2);
    } else if (inputNumber.length > 7 && inputNumber.length <= 10) {
      number =
        inputNumber.substr(0, 3) +
        '-' +
        inputNumber.substr(3, 3) +
        '-' +
        inputNumber.substr(6, 4);
    } else if (inputNumber.length > 10) {
      number =
        inputNumber.substr(0, 3) +
        '-' +
        inputNumber.substr(3, 3) +
        '-' +
        inputNumber.substr(6, 4) +
        '-' +
        inputNumber.substr(10, 4);
    }

    const dublicateName = contacts.find(contact => contact.name === name);
    const dublicateNumber = contacts.find(contact => contact.phone === number);

    if (dublicateName) {
      toast.error(`${name} is already in contacts.`);
      event.target.reset();
      return;
    }

    if (dublicateNumber) {
      toast.error(`Contact with number ${number} is already in contacts.`);
      event.target.reset();
      return;
    }

    onSubmit();
    dispatch(addContact({ name, number }));
    event.target.reset();
    toast.success(`Contact ${name} is added in contacts.`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, mb: 1 }} />
        <TextField
          label="name"
          variant="standard"
          type="text"
          name="name"
          placeholder="Will Smith"
          inputProps={{
            inputMode: 'numeric',
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          }}
          margin="normal"
          required
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PhoneIphoneIcon sx={{ color: 'action.active', mr: 1, mb: 1 }} />
        <TextField
          label="number"
          variant="standard"
          type="text"
          name="number"
          placeholder="123-456-7890"
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*',
          }}
          margin="normal"
          required
        />
      </Box>
      <Button
        type="submit"
        disabled={isLoading}
        variant="contained"
        size="small"
        sx={{ mt: 4 }}
      >
        Add contact
      </Button>
    </Form>
  );
}
