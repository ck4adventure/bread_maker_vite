import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Checkbox } from "@/components/ui/checkbox"

interface TurnsCardProps {

}

export const TurnsCard: React.FC<TurnsCardProps> = ({ }) => {
	return (
		<Card id='do-turns' className='my-4 border-gray-200 border rounded-md'>
			<CardHeader>
				<CardTitle>Do turns</CardTitle>
			</CardHeader>
			<CardContent>
				<p>Once the 30min is done, take the dough and do the first set of turns, about 6.</p>
				<p>Set the timer for another 30 mins.</p>
				<p>Continue turning every 30mins another 5 times, to make 6 total.</p>
				<p>If, after 6 turns the dough doesn't feel structured enough yet, do up to 2 more.</p>
				<div id='turns-checkboxes' className='flex my-2'>
					<div className='m-2 flex flex-col items-center'>
						<Checkbox />
						<p>Turn 1</p>
					</div>
					<div className='m-2 flex flex-col items-center'>
						<Checkbox />
						<p>Turn 2</p>
					</div>
					<div className='m-2 flex flex-col items-center'>
						<Checkbox />
						<p>Turn 3</p>
					</div>
					<div className='m-2 flex flex-col items-center'>
						<Checkbox />
						<p>Turn 4</p>
					</div>
					<div className='m-2 flex flex-col items-center'>
						<Checkbox />
						<p>Turn 5</p>
					</div>
					<div className='m-2 flex flex-col items-center'>
						<Checkbox />
						<p>Turn 6</p>
					</div>
					<div className='m-2 flex flex-col items-center'>
						<Checkbox />
						<p>Turn 7</p>
					</div>
					<div className='m-2 flex flex-col items-center'>
						<Checkbox />
						<p>Turn 8</p>
					</div>


				</div>
				<p>Remember to keep the dough in a warm place, 80F is ideal.</p>
			</CardContent>
		</Card>
	)
}

export default TurnsCard;