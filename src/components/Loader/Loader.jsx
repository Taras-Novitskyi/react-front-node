import { RotatingLines } from 'react-loader-spinner';
import { Container } from '@mui/material';

export const Loader = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '2px',
      }}
    >
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="52"
        visible={true}
      />
    </Container>
  );
};
