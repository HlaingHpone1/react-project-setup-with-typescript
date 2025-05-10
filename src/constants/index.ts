export const COOKIE_CONSTANTS = {
  ACCESS_TOKEN_KEY: 'accessToken',
  REFRESH_TOKEN_KEY: 'refreshToken',
};

export const USER_ROLES: {
  [key: string]: {
    value: number;
    key: UserRole;
    label: string;
  };
} = Object.freeze({
  ADMIN: {
    value: 1,
    key: 'ADMIN',
    label: 'Admin',
  },
  USER: {
    value: 2,
    key: 'USER',
    label: 'User',
  },
});

export const GENDER = Object.freeze({
  MALE: {
    value: 1,
    key: 'MALE',
    label: 'Male',
  },
  FEMALE: {
    value: 2,
    key: 'FEMALE',
    label: 'Female',
  },
  OTHER: {
    value: 3,
    key: 'OTHER',
    label: 'Other',
  },
});
