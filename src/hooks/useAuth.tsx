
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  email: string;
  fullName?: string;
  userType?: string;
  signedIn: boolean;
  signedInAt: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signOut: () => void;
  refreshAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const refreshAuth = () => {
    const userSession = localStorage.getItem("userSession");
    if (userSession) {
      try {
        const userData = JSON.parse(userSession);
        setUser(userData);
      } catch (error) {
        console.error("Error parsing user session:", error);
        localStorage.removeItem("userSession");
      }
    } else {
      setUser(null);
    }
  };

  const signOut = () => {
    localStorage.removeItem("userSession");
    setUser(null);
  };

  useEffect(() => {
    refreshAuth();
  }, []);

  const value = {
    user,
    isAuthenticated: !!user?.signedIn,
    signOut,
    refreshAuth
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
