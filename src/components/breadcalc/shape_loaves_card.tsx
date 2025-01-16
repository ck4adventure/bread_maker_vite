import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Checkbox } from "@/components/ui/checkbox";

interface ShapeDoughCardProps {

}

export const ShapeDoughCard: React.FC<ShapeDoughCardProps> = () => {
	return (
		<Card id='shape-loaves' className='my-4 border-gray-200 border rounded-md'>
			<CardHeader>
				<CardTitle>Shape Into Loaf Forms</CardTitle>
			</CardHeader>
			<CardContent>
				{/* <div id='loaf-form-selector' className='flex'>
					<div className='flex items-center'>
						<Checkbox className='mr-2' /><p>Loaf Tins</p>
					</div>
					<div className='flex items-center mx-4'>
						<Checkbox className='mr-2' /><p>Round Loaves</p>
					</div>
					<div className='flex items-center mx-4'>
						<Checkbox className='mr-2' /><p>Oblong Loaves</p>
					</div>
				</div> */}
				<p>Dust the top of each piece of dough lightly with flour.</p>
				<p>Flip and do envelope fold shaping.</p>
				<p>Place into floured baskets or oiled loaf tins.</p>
				<p>Let rise another 2 hours or put into fridge for 8-12, up to 24 hours max.</p>
			</CardContent>
		</Card>
	);
}

export default ShapeDoughCard;