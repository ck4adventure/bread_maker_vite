
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';

// INGREDIENTS LEVAIN
// dough factor 1 kg
const breadFlour = 450;
const wheatFlour = 50;
const leaven = 100;
const water = 350;

interface CreateDoughCardProps {
	doughFactor: number;
}

export const CreateDoughCard: React.FC<CreateDoughCardProps> = ({doughFactor}) => {
	return (
					<Card id='make-dough' className='my-4 border-gray-200 border rounded-md'>
				<CardHeader>
					<CardTitle className='my-2 font-bold'>Make the Dough</CardTitle>
				</CardHeader>
				<CardContent>
					<div className=''>Ingredients</div>
					<p>{water * doughFactor} g warm water</p>
					<p>{leaven * doughFactor} g leaven</p>
					<p>{breadFlour * doughFactor} g bread flour</p>
					<p>{wheatFlour * doughFactor} g wheat flour</p>
					<p>Mix together by hand or with a mixer on low.</p>
					<p>Let rest for 25 mins.</p>
				</CardContent>
			</Card>
	)
}

export default CreateDoughCard;