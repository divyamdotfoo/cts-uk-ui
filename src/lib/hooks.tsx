"use client";
import React, { useState, createContext, useEffect, useContext } from "react";
import { UserData } from "./types";
import { useRouter } from "next/navigation";

const LocalStorageKeyUser = "esim-uk-user";
const LocalStorageKeyCart = "esim-uk-cart";

interface UserContext {
  user?: UserData;
  updateUser: (data: UserData) => void;
  logout: () => void;
  loading: boolean;
}

const validateLocalUserDataShape = (data: string): UserData | false => {
  try {
    const obj = JSON.parse(data);
    if (
      typeof obj !== "object" ||
      obj === null ||
      typeof obj["token"] !== "string" ||
      typeof obj["firstName"] !== "string" ||
      typeof obj["lastName"] !== "string" ||
      typeof obj["userId"] !== "string" ||
      typeof obj["email"] !== "string"
    )
      return false;
    return obj;
  } catch (error) {
    return false;
  }
};

const UserContext = createContext<UserContext | null>(null);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserData>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkUser();
    setLoading(false);
  }, []);

  const checkUser = async () => {
    if (localStorage) {
      const rawData = localStorage.getItem(LocalStorageKeyUser);
      if (!rawData) return;
      const userData = validateLocalUserDataShape(rawData);
      if (!userData) return;
      setUser(userData);
    }
  };

  const updateUser = (data: UserData) => {
    setUser(data);
    if (localStorage) {
      localStorage.setItem(LocalStorageKeyUser, JSON.stringify(data));
    }
  };

  const logout = () => {
    if (localStorage) {
      if (localStorage.getItem(LocalStorageKeyUser)) {
        localStorage.removeItem(LocalStorageKeyUser);
      }
    }
    router.refresh();
    router.replace("/");
  };

  return (
    <UserContext.Provider value={{ user, logout, updateUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const userContext = useContext(UserContext);
  if (!userContext) throw new Error("");
  return userContext;
};
