"use client";

import { createContext, useContext, useState } from "react"

const ModalContext = createContext<{
  	openModal: () => void
  	closeModal: () => void
  	isOpen: boolean
}>({ openModal: () => {}, closeModal: () => {}, isOpen: false })

export function ModalProvider({ children }: { children: React.ReactNode }) {
  	const [isOpen, setIsOpen] = useState(false)
  	return (
    	<ModalContext.Provider value={{
      		openModal: () => setIsOpen(true),
      		closeModal: () => setIsOpen(false),
      		isOpen
    	}}>
      		{children}
    	</ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)
