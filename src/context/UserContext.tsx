import { createContext, useState } from "react";

const initialContext = {
  user: {
    coins: 0,
    id: null,
    email: "",
  },
};

export const UserContext = createContext(initialContext);

interface providerI {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: providerI) => {
  const [user, setUser] = useState({
    coins: 0,
    id: null,
    email: "",
  });

  const data = {
    user,
    setUser,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
