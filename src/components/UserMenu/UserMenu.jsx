import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Box } from '@mui/material';
import { BiLogIn } from 'react-icons/bi';
import { authSelectors, authOperations } from '../../redux/auth';

export  function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUserEmail);

  return (
    <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'inline-block',
          fontWeight: '700',
          marginRight: 1,
        }}
      >
        Weclome, {name}
      </Box>
      <IconButton
        type="button"
        aria-label="Logout"
        onClick={() => dispatch(authOperations.logOut())}
      >
        <BiLogIn />
      </IconButton>
    </Box>
  );
}
