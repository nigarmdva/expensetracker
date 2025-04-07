import React, { useEffect, useState } from "react";
import useAuthStore from "../store/auth";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      console.log("Direct from localStorage:", storedUser);
      
      if (storedUser && !userData) {
        setUserData(storedUser);
      }
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
    }
  }, [userData]);

  const storeUser = useAuthStore(state => state.user);
  const storeToken = useAuthStore(state => state.token);
  const logout = useAuthStore(state => state.logout);

  useEffect(() => {
    console.log("Store User:", storeUser);
    console.log("Store Token:", storeToken);
        if (storeUser && !userData) {
      setUserData(storeUser);
    }
  }, [storeUser, storeToken, userData]);


  const user = userData || storeUser;

  if (!user) {
    return <div>
      <p>Loading user data...</p>
    </div>;
  }

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };
  return (
    <div>
      <h1>User Profile</h1>
      
      <h2>User Details:</h2>
      {user.name && <p><strong>Name:</strong> {user.name}</p>}
      {user.id && <p><strong>ID:</strong> {user.id}</p>}
      {user.email && <p><strong>Email:</strong> {user.email}</p>}
      
      <button 
        onClick={handleLogout} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;