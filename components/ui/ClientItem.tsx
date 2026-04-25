type ClientItemProps = {
    name: string;
    imgSrc: string;
};

export default function ClientItem({ name, imgSrc }: ClientItemProps) {
	return (
		<li className="h-18 flex items-center">
      		<img src={imgSrc} alt={name} className="h-24 w-24 object-contain" />
    	</li>
	);
}
