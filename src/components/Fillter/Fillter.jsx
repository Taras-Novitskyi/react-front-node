import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Box, TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const query = event.target.value;

    dispatch(setFilter(query));
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <TextField
        label="Find contacts by name"
        // variant="standard"
        type="text"
        onChange={handleChange}
      />
    </Box>
  );
};
