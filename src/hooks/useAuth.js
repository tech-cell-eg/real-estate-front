import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true); //!change to false when API is ready

  useEffect(() => {
    const fetchUser = async () => {

        //!apply logic to check if user is authenticated, when API is ready
    };
    fetchUser();
  }, []);

  return { user, isAuthenticated };
}
