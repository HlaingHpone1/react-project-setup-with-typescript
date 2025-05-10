interface UserData {
  id: string;
  userName: string;
  email: string;
  role: UserRole;
}

type UserRole = 'ADMIN' | 'USER';
