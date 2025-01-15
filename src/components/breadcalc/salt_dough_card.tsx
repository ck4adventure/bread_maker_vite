import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';

const addSalt = 11;
const addWater = 25;


interface SaltDoughCardProps {
	doughFactor: number;
}

export const SaltDoughCard: React.FC<SaltDoughCardProps> = ({doughFactor}) => {
	return (
					<Card id='salt-dough' className='my-4 border-gray-200 border rounded-md'>
				<CardHeader>
					<CardTitle className='my-2 font-bold'>Salt the Dough</CardTitle>
				</CardHeader>
				<CardContent>
					<p>Add an additional</p>
					<p>{addWater * doughFactor} g warm water</p>
					<p>{addSalt * doughFactor} g salt</p>
					<p>Mix well until salt evenly distributed.</p>
					<p>Put into large bowl, cover, and set aside in a warm area to start proving.</p>
					<p>Set a timer for 30min.</p>
				</CardContent>
			</Card>
	)
}

export default SaltDoughCard;