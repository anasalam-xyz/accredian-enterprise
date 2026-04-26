import type { LucideIcon } from "lucide-react";

type ProgramItemProps = {
  	label: string;
  	icon: LucideIcon;
};

export default function ProgramItem({ label, icon }: ProgramItemProps) {
	const Icon = icon;
	return (
		<li className="px-2 py-2 w-40 md:min-w-[25%] md:max-w-[40%] flex-grow-0 shadow-[0_2px_8px_rgba(0,0,0,0.2)] flex flex-row md:flex-col items-center md:gap-4">
      		<Icon className="size-4 md:size-12 text-blue-600"/>
      		<p className="text-wrap text-xs md:text-lg md:font-semibold">{label}</p>
    	</li>
	);
}
