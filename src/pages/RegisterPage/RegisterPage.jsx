import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, InputLabel, Input } from '@mui/material';
import { authOperations } from '../../redux/auth';
import { Form } from './RegisterPage.styled';

export function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Registration</h1>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <InputLabel sx={{ display: 'flex', flexDirection: 'column', mb: 4 }}>
          Name
          <Input type="text" name="name" value={name} onChange={handleChange} />
        </InputLabel>

        <InputLabel sx={{ display: 'flex', flexDirection: 'column', mb: 4 }}>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </InputLabel>

        <InputLabel sx={{ display: 'flex', flexDirection: 'column', mb: 4 }}>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </InputLabel>

        <Button variant="contained" size="medium" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
