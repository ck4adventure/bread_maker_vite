import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';


export const BakeLoavesCard = () => {
	return (
		<Card id='bake-loaves' className='my-4 border-gray-200 border rounded-md'>
			<CardHeader>
				<CardTitle >Prep and Bake</CardTitle>
			</CardHeader>
			<CardContent>
				<p>If loaves in fridge, take out about 2 hours before baking time to get them to room temp.</p>
				<p>Preheat oven to 500F. If using dutch oven, put it in to preheat.</p>
				<p>Once oven ready, if using tins, mist with a little water on top and put tins straight in.</p>
				<p>Or, if using dutch oven, flip dough from basket, score the top, cover, and put into oven.</p>
				<p>Optionally, can score the top of the loaves in tins at about the 6-8 min mark. Also helps to mist with steam during first 10 mins of baking.</p>
				<p>If dutch oven, take off lid at the 20min mark.</p>
				<p>Bake for about 40-45 mins or until top is dark golden brown.</p>
			</CardContent>
		</Card>
	)
}

export default BakeLoavesCard