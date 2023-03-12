import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, InputLabel, Input } from '@mui/material';
import { authOperations } from '../../redux/auth';
import { Form } from './LoginPage.styled';

function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit} autoComplete="off">
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
          Login
        </Button>
      </Form>
    </div>
  );
};


export default LoginPage;
