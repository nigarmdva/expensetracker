// authStore.js
import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,

  login: (user, token) => {
    set({ user, token });
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  },
  logout: () => {
    set({ user: null, token: null });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    console.log("Logout successful");
    try{
      window.location.href = "/login";
    }
    catch(err){
      console.log(err);
    }
  },
}));

export default useAuthStore;
