import { redirect } from 'react-router';

export const authLoader = (allowedRoles: UserRole[]) => async () => {
  try {
    const rawStore = localStorage.getItem('userStore');
    if (!rawStore) return redirect('/');

    const { state } = JSON.parse(rawStore);
    const { isAuthenticated, userData } = state;

    if (!isAuthenticated) return redirect('/');
    if (!allowedRoles.includes(userData?.role)) return redirect('/not-found');

    return;
  } catch (error) {
    console.error('authLoader error:', error);
    return redirect('/');
  }
};
