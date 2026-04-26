"use client";

import { toast } from "react-hot-toast";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const countryCodes = [
  	{ flag: "🇮🇳", code: "+91", country: "India" },
  	{ flag: "🇺🇸", code: "+1", country: "USA" },
  	{ flag: "🇬🇧", code: "+44", country: "UK" },
  	{ flag: "🇦🇺", code: "+61", country: "Australia" },
  	{ flag: "🇦🇪", code: "+971", country: "UAE" },
  	{ flag: "🇸🇬", code: "+65", country: "Singapore" },
  	{ flag: "🇩🇪", code: "+49", country: "Germany" },
  	{ flag: "🇫🇷", code: "+33", country: "France" },
  	{ flag: "🇯🇵", code: "+81", country: "Japan" },
  	{ flag: "🇨🇳", code: "+86", country: "China" },
  	{ flag: "🇧🇷", code: "+55", country: "Brazil" },
  	{ flag: "🇿🇦", code: "+27", country: "South Africa" },
];

const domains = [
	"Information Technology",
  	"Digital Marketing",
	"Data Science",
	"Artificial Intelligence & ML",
	"Human Resources",
	"Finance & Accounting",
	"Product Management",
	"Operations & Supply Chain",
	"Sales & Business Development",
	"Leadership & Management",
	"Cybersecurity",
	"Cloud Computing",
];

interface LeadModalProps {
  	isOpen: boolean
  	onClose: () => void
}
interface FormData {
  	name: string
  	email: string
  	countryCode: string
  	phone: string
  	company: string
  	domain: string
  	candidates: string
  	delivery: string
  	location: string
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  	const [form, setForm] = useState<FormData>({
   		name: "", email: "", countryCode: "+91", phone: "",
    	company: "", domain: "", candidates: "", delivery: "", location: "",
  	});
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const overlayRef = useRef<HTMLDivElement>(null);

  // close on ESC
  	useEffect(() => {
    	const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    	window.addEventListener("keydown", handler)
    	return () => window.removeEventListener("keydown", handler)
  	}, [onClose])

  // prevent body scroll when open
  	useEffect(() => {
    	document.body.style.overflow = isOpen ? "hidden" : ""
    	return () => { document.body.style.overflow = "" }
  	}, [isOpen]);

  	const handleChange = (field: keyof FormData) => (
   		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  	) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  	const handleSubmit = async () => {
    	setLoading(true)
    	try {
      		await fetch("/api/lead", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
      		})
		} catch (e) {
				console.error(e);
				toast.error("Something went wrong");
		}
		setTimeout(() => {
			setLoading(false)
			setSubmitted(true)
		}, 1000);
		setTimeout(() => {
      		onClose()
      		setSubmitted(false)
      		setForm({ name: "", email: "", countryCode: "+91", phone: "",
        	company: "", domain: "", candidates: "", delivery: "", location: "" })
        	toast.success("Your Enquiry Has Been Submitted.")
    	}, 2500);
  	}

	if (!isOpen) return null;

	const inputClass = "w-full border-0 border-b border-gray-300 focus:border-blue-600 focus:outline-none py-2 text-sm bg-transparent transition-colors placeholder:text-gray-400"
	const selectClass = "w-full border-0 border-b border-gray-300 focus:border-blue-600 focus:outline-none py-2 text-sm bg-transparent transition-colors appearance-none cursor-pointer"

  return (
    <div
      ref={overlayRef}
      onClick={e => { if (e.target === overlayRef.current) onClose() }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-2xl w-full max-w-3xl h-[90vh] flex overflow-hidden relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full hover:bg-black/10 flex items-center justify-center text-gray-600 text-2xl transition-colors"
        >
          ×
        </button>

        <div className="hidden sm:flex w-[45%]">
          <img src="/images/business-v2.webp" 
          	className="h-full object-cover"
          />
        </div>

        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <p className="text-lg font-bold text-gray-900 mb-1">Get in Touch</p>
          <p className="text-xs text-gray-500 mb-6">Fill in your details and we'll get back to you shortly.</p>

          <div className="flex flex-col gap-5 text-gray-700">

            <input
              type="text" placeholder="Enter name" value={form.name}
              onChange={handleChange("name")} className={inputClass}
            />

            <input
              type="email" placeholder="Enter email" value={form.email}
              onChange={handleChange("email")} className={inputClass}
            />

            <div className="flex items-center border border-gray-300 focus-within:border-blue-600 rounded-lg px-3 gap-2 transition-colors">
              <select
                value={form.countryCode}
                onChange={handleChange("countryCode")}
                className="border-0 outline-none text-xs bg-transparent py-2 cursor-pointer text-gray-700 max-w-[100px]"
              >
                {countryCodes.map(c => (
                  <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                ))}
              </select>
              <div className="w-px h-5 bg-gray-200 flex-shrink-0" />
              <input
                type="tel" placeholder="Enter phone number" value={form.phone}
                onChange={handleChange("phone")}
                className="flex-1 border-0 outline-none text-sm py-2 bg-transparent placeholder:text-gray-400"
              />
            </div>

            <input
              type="text" placeholder="Enter company name" value={form.company}
              onChange={handleChange("company")} className={inputClass}
            />

            <div className="relative">
              <select value={form.domain} onChange={handleChange("domain")} className={selectClass}>
                <option value="" disabled>Select domain</option>
                {domains.map(d => <option key={d}>{d}</option>)}
              </select>
              <svg className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>

            <input
              type="number" placeholder="Enter number of candidates" value={form.candidates}
              onChange={handleChange("candidates")} className={inputClass}
            />

            <div className="relative">
              <select value={form.delivery} onChange={handleChange("delivery")} className={selectClass}>
                <option value="" disabled>Enter mode of delivery</option>
                <option>Online</option>
                <option>Offline</option>
                <option>Hybrid</option>
              </select>
              <svg className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>

            <input
              type="text" placeholder="eg: Gurgaon, Delhi" value={form.location}
              onChange={handleChange("location")} className={inputClass}
            />

			{submitted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center text-sm text-green-700">
                ✓ Thank you! We'll get back to you within 24 hours.
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg text-sm font-semibold transition-colors mt-2"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
