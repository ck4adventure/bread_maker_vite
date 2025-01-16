import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';


import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button';


export const RateLoavesCard = () => {
	return (
					<Card id='rate-loaves' className='my-4 border-gray-200 border rounded-md'>
				<CardHeader>
					<CardTitle >Rate Loaves</CardTitle>
				</CardHeader>
				<CardContent>
					<div id='doneness-group' className='flex'>
						<div className='mr-4'>Crust Color / Doneness</div>
						<RadioGroup className='flex'>
							<div className='mr-2'>
								<RadioGroupItem value="underbaked" className='mr-1' />
								<Label>Underbaked</Label>
							</div>
							<div className='mr-2'>
								<RadioGroupItem value="lightlybaked" className='mr-1' />
								<Label>Lightly Baked</Label>
							</div>
							<div className='mr-2'>
								<RadioGroupItem value="wellbaked" className='mr-1' />
								<Label>Well Baked</Label>
							</div>
							<div className='mr-2'>
								<RadioGroupItem value="overbaked" className='mr-1' />
								<Label>Overbaked / Burnt</Label>
							</div>

						</RadioGroup>
					</div>

					<div id='height-group' className='flex my-2'>
						<div className='mr-4'>Loaf Height</div>
						<RadioGroup className='flex'>
							<div className='mr-2'>
								<RadioGroupItem value="flat" className='mr-1' />
								<Label>Flat</Label>
							</div>
							<div className='mr-2'>
								<RadioGroupItem value="slightrise" className='mr-1' />
								<Label>Slight Rise</Label>
							</div>
							<div className='mr-2'>
								<RadioGroupItem value="goodrise" className='mr-1' />
								<Label>Good Rise</Label>
							</div>
							<div className='mr-2'>
								<RadioGroupItem value="highrise" className='mr-1' />
								<Label>High Rise</Label>
							</div>
							<div className='mr-2'>
								<RadioGroupItem value="tornrise" className='mr-1' />
								<Label>Side Tears</Label>
							</div>

						</RadioGroup>
					</div>

					<div id='flavor-group' className='flex my-2'>
						<div className='mr-4'>Sourdough Flavor</div>
						<RadioGroup className='flex'>
							<div className='mr-2'>
								<RadioGroupItem value="light" className='mr-1' />
								<Label>Lightly Sour</Label>
							</div>
							<div className='mr-2'>
								<RadioGroupItem value="average" className='mr-1' />
								<Label>Some Sour</Label>
							</div>
							<div className='mr-2'>
								<RadioGroupItem value="strong" className='mr-1' />
								<Label>Strong Sourdough</Label>
							</div>

						</RadioGroup>
					</div>

					<div id='structure-group' className='flex my-2'>
						<div className='mr-4'>Interior Structure</div>
						<RadioGroup className='flex'>
							<div className='mr-2'>
								<RadioGroupItem value="dense" className='mr-1' />
								<Label>Dense</Label>
							</div>
							<div className='mr-2'>
								<RadioGroupItem value="small" className='mr-1' />
								<Label>Small Bubbles</Label>
							</div>
							<div className='mr-2'>
								<RadioGroupItem value="good" className='mr-1' />
								<Label>Medium Bubbles</Label>
							</div>
							<div className='mr-2'>
								<RadioGroupItem value="airy" className='mr-1' />
								<Label>Large Bubbles</Label>
							</div>
						</RadioGroup>

					</div>

				</CardContent>
				<CardFooter className='flex justify-around'>
					<Button variant={"outline"}>Reset Form</Button>
					<Button>Save Baking Log</Button>
				</CardFooter>
			</Card>

	)
}

export default RateLoavesCard;