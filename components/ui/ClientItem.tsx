type ClientItemProps = {
    name: string;
    imgSrc: string;
};

export default function ClientItem({ name, imgSrc }: ClientItemProps) {
	return (
		<li className="flex-shrink-0 flex items-center">
      		<img src={imgSrc} alt={name} className="h-20 w-20 object-contain" />
    	</li>
	);
}
