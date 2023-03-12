import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { IconButton, Box, Link, Container } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { deleteContact } from 'redux/operation';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    toast.success(`Contact ${name} has been removed from the contacts.`);
    return dispatch(deleteContact(id));
  };

  const LinkTo = `tel:${number}`;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Container sx={{ m: 1 }}>
        <Box
          sx={{
            display: 'flex',
            // justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          <AccountBoxIcon sx={{ color: 'action.active', mr: 1 }} />
          {name}:
        </Box>
        <Link
          href={LinkTo}
          underline="hover"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <PhoneIphoneIcon sx={{ color: 'action.active', mr: 1 }} />
          {number}
        </Link>
      </Container>
      <IconButton
        type="button"
        onClick={() => handleDelete(id)}
        variant="outlined"
        size="Normal"
        sx={{ color: 'action.active', ml: 4 }}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
