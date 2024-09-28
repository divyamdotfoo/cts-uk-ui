"use client";
import React, { useState, createContext, useEffect, useContext } from "react";

type User = {
  email: string;
};

type UserContext = {
  user?: User;
  loading: boolean;
  login: ({ email, password }: { email: string; password: string }) => void;
  logout: () => void;
};
const UserContext = createContext<UserContext | null>(null);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {};

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {};
  const logout = async () => {};

  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const userContext = useContext(UserContext);
  if (!userContext) throw new Error("");
  return userContext;
};
