export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;

const AuthSelectors = {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUserName,
  selectUserEmail,
};

export default AuthSelectors;
