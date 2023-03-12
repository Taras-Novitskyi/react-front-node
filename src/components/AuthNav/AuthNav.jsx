import React from 'react';
import { StyledLink } from './AuthNav.styled';

export function AuthNav() {
  return (
    <div>
      <StyledLink to="/register">Registration</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </div>
  );
}
