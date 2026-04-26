type AudienceCardProps = {
	title: string;
	desc: string;
};

export default function AudienceItem({ title, desc, icon }: AudienceCardProps) {
	const Icon = icon;
	return (
		<li className="text-white w-64 p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-2">
			<Icon className="size-8"/>
			<p className="font-semibold">{title}</p>
			<p className="text-sm text-gray-600">{desc}</p>
		</li>
	);
}

