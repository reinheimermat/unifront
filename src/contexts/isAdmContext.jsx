import React, { createContext, useContext, useState } from 'react'

const isAdminContext = createContext()

export const useAdminContext = () => {
  return useContext(isAdminContext)
}

export const AdmProvider = ({ children }) => {
  const [isAdmin, setIsAdm] = useState(false)

  const toggleAdmin = () => {
    setIsAdm(!isAdmin)
  }

  return (
    <isAdminContext.Provider value={{ isAdmin, toggleAdmin }}>
      {children}
    </isAdminContext.Provider>
  )
}
