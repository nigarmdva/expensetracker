import { create } from "zustand";

const useAuth = create((set) => ({
    isAuth: false,
    login: () => set({ isAuth: true }),
    logout: () => set({ isAuth: false }),
}));

export default useAuth;
// export const useAuthStore = (state) => ({ isAuth: state.isAuth, login: state.login, logout: state.logout })
