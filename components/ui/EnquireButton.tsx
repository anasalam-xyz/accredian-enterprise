"use client"
import { useModal } from "@/context/ModalContext"

interface EnquireButtonProps {
  	label?: string
  	className?: string
  	children?: React.ReactNode
}

export default function EnquireButton({ 
  	label = "Enquire Us",
  	className = "",
  	children
}: EnquireButtonProps) {

  	const { openModal } = useModal()
  	return (
    	<button
      		onClick={openModal}
      		className={`cursor-pointer ${className}`}
    	>
      		{label}
      		{children}
   	 	</button>
  	)
}
