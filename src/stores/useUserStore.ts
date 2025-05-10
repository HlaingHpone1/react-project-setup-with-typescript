import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UserStore {
  isAuthenticated: boolean;
  userData: UserData | undefined;

  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setUserData: (data: UserData | undefined) => void;
  logOut: () => void;
}

export const useUserStore = create<UserStore>()(
  devtools(
    persist<UserStore>(
      set => ({
        isAuthenticated: false,
        userData: undefined,

        setIsAuthenticated: (isAuthenticated: boolean) =>
          set({ isAuthenticated: isAuthenticated }),
        setUserData: (data: UserData | undefined) => set({ userData: data }),
        logOut: () => {
          set(() => ({
            isAuthenticated: false,
            userData: undefined,
          }));
          localStorage.removeItem('userStore');
        },
      }),
      {
        name: 'userStore',
      }
    )
  )
);
