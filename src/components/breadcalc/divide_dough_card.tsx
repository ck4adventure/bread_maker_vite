import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';


interface DivideDoughCardProps {

}

export const DivideDoughCard: React.FC<DivideDoughCardProps> = ({}) => {
	return (
					<Card id='divide-dough' className='my-4 border-gray-200 border rounded-md'>
				<CardHeader>
					<CardTitle >Divide Dough and Bench Rest</CardTitle>
				</CardHeader>
				<CardContent>
					<p>Turn dough out onto a clean counter space.</p>
					<p>Sprinkle the top with flour.</p>
					<p>Using a bench scraper, divide dough into as many pieces as you need</p>
					<p>For each piece, flip it over and draw the outside edges up and in to the middle, creating a ball.</p>
					<p>Flip over again so joined side is on the bottom, use scraper to help shape ball and add tension.</p>
					<p>Cover dough ball(s) with towel and let rest 25-40 mins, depending on temp.</p>
					<p>Dough should still have some tension at end of rest, if not, flip and round into ball again and let rest 25 mins.</p>
				</CardContent>
			</Card>
	)
};

export default DivideDoughCard;