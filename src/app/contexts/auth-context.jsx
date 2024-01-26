import { createContext, useContext, useState } from "react";

const AuthContext = createContext({})

export default function AuthProvider({ children }) {
  const [ user, setUser ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true)

  return (
    <AuthContext.Provider value={{ user, isLoading, setUser, setIsLoading }}>
      { children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}