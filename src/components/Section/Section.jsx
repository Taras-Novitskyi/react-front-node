import PropTypes from 'prop-types';
import { Title } from './Section.styled';
import { Box } from '@mui/material';

export const Section = ({ title, children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {title && <Title>{title}</Title>}
      {children}
    </Box>
  );
};


Section.propTypes = {
  title: PropTypes.string,
};
