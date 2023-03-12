import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Container } from '@mui/material';
import { Title } from './HomePage.styled';

function HomePage() {
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ContactPhoneIcon sx={{ fontSize: 48, mt: 1, mr: 2 }} />
        <Title>Phonebook</Title>
      </Container>
    </>
  );
};

export default HomePage;
