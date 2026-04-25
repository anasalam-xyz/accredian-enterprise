type ProgramItemProps = {
  	label: string;
  	icon: LucideIcon;
};

export default function ProgramItem({ label, icon }: ProgramItemProps) {
	const Icon = icon;
	return (
		<li className="min-w-[25%] shadow-[0_2px_8px_rgba(0,0,0,0.2)] flex flex-col items-center gap-4">
      		<Icon className="size-12 text-blue-600"/>
      		<p className="font-semibold">{label}</p>
    	</li>
	);
}
