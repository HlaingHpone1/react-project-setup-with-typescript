import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// This is example for userStore. U Can create as u Like.
interface UserData {
  id: string;
  userName: string;
  email: string;
  role: string;
}

interface UserStore {
  logInUser: boolean;
  userData: UserData | null;

  setLogInUser: (logInUser: boolean) => void;
  setUserData: (data: UserData) => void;
  logOut: () => void;
}

export const userStore = create<UserStore>()(
  devtools(
    persist<UserStore>(
      (set) => ({
        logInUser: false,
        userData: null,

        setLogInUser: (logInUser: boolean) => set({ logInUser: logInUser }),
        setUserData: (data: UserData) => set({ userData: data }),
        logOut: () => {
          set(() => ({
            logInUser: false,
            userData: null,
          }));
          localStorage.removeItem("userStore");
        },
      }),
      {
        name: "userStore",
      }
    )
  )
);
