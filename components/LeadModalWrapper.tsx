"use client";

import { useModal } from "@/context/ModalContext"
import LeadModal from "./LeadModal"

export default function LeadModalWrapper() {
  	const { isOpen, closeModal } = useModal()
  	return <LeadModal isOpen={isOpen} onClose={closeModal} />
}
