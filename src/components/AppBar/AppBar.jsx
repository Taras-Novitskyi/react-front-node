import { useSelector } from 'react-redux';
import {Navigation} from '../Navigation/Navigation';
import {UserMenu} from '../UserMenu/UserMenu';
import {AuthNav} from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/auth';
import { Header } from './AppBar.styled';

export function AppBar() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
