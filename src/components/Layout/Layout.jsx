import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@mui/material';
import { AppBar } from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <Container 
      sx={{ width: "960px",
      // margin: "0 auto",
      padding: "0 16px" }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
