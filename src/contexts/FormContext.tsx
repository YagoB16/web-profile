// src/contexts/FormContext.tsx
'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface FormContextType {
  isFormOpen: boolean
  openForm: () => void
  closeForm: () => void
  toggleForm: () => void
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export function useForm() {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useForm deve ser usado dentro de um FormProvider')
  }
  return context
}

interface FormProviderProps {
  children: ReactNode
}

export function FormProvider({ children }: FormProviderProps) {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const openForm = () => setIsFormOpen(true)
  const closeForm = () => setIsFormOpen(false)
  const toggleForm = () => setIsFormOpen(prev => !prev)

  return (
    <FormContext.Provider value={{ isFormOpen, openForm, closeForm, toggleForm }}>
      {children}
    </FormContext.Provider>
  )
}
