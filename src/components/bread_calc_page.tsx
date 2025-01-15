
import { useState } from 'react';

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button';
import { Checkbox } from "@/components/ui/checkbox"

import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';

import RecipeInputsCard from './breadcalc/inputs_card';
import LeavenCard from "./breadcalc/leaven_card";
import CreateDoughCard from "./breadcalc/create_dough_card";
import SaltDoughCard from "./breadcalc/salt_dough_card";
import DivideDoughCard from './breadcalc/divide_dough_card';



const unitTypes = ["kg", "lb"];
const defaultUnit = unitTypes[0]; // should be kg
const breadTypes = ["levain", "wheat"]
const defaultBreadType = breadTypes[0];


// LEAVEN
// 2 1kg loaves dough needs 200g starter leaves 200g
// 1kg needs 100 starter leaves 200
const baseLeavenWaterAmount = 100; // for refresh
const baseLeavenFlourAmount = 100;
const baseLeavenStarterAmount = 0.5;
// then the amounts for how much dough we are making
// dough factor 1 KG
const factoredLeavenWaterAmount = 50; // for 1 1kg loaf (2lb loaf)
const factoredLeavenFlourAmount = 50; // for 1kg loaf (2lb loaf)
const factoredLeavenStarterAmount = 0.5; // half tablespoon for each loaf






// reset form
// set doughFactor to 1 or 2
// that will update the leaven amounts 
// units set to kg
// dough type set to Levain
// turns cleared
// loaf forms cleared


export default function BreadCalcPage() {
	const [doughFactor, setdoughFactor] = useState(1);
	const [units, setUnits] = useState(defaultUnit);
	const [breadType, setBreadType] = useState(defaultBreadType);
	const [leavenWaterAmount, setLeavenWaterAmount] = useState(baseLeavenWaterAmount + factoredLeavenWaterAmount);
	const [leavenFlourBlendAmount, setLeavenFlourBlendAmount] = useState(baseLeavenFlourAmount + factoredLeavenFlourAmount);
	const [leavenStarterAmount, setLeavenStarterAmount] = useState(baseLeavenStarterAmount + factoredLeavenStarterAmount);

	const handleUnitsChange = (unit: string) => {
		if (unit) {
			setUnits(unit);
		}
	}

	const handleDoughFactorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.value) {
			const newdoughFactor = Number(event.target.value);
			setdoughFactor(newdoughFactor);
			const newWater = baseLeavenWaterAmount + (newdoughFactor * factoredLeavenWaterAmount);
			const newStarter = baseLeavenStarterAmount + (newdoughFactor * factoredLeavenStarterAmount);
			const newFlour = baseLeavenFlourAmount + (newdoughFactor * factoredLeavenFlourAmount);
			setLeavenWaterAmount(newWater);
			setLeavenStarterAmount(newStarter);
			setLeavenFlourBlendAmount(newFlour);
		}
	}

	const handleBreadTypeChange = (type: string) => {
		if (type) {
			setBreadType(type);
		}
	}

	return (
		<div id='bread-calc-page' className='p-8 mx-16'>
			<RecipeInputsCard
				handledoughFactorChange={handleDoughFactorChange}
				doughFactor={doughFactor}
				units={units}
				handleUnitsChange={handleUnitsChange}
				breadType={breadType}
				handleBreadTypeChange={handleBreadTypeChange}
			/>
			<LeavenCard
				leavenWaterAmount={leavenWaterAmount}
				leavenStarterAmount={leavenStarterAmount}
				leavenFlourBlendAmount={leavenFlourBlendAmount}
			/>
			<CreateDoughCard doughFactor={doughFactor} />
			
			<SaltDoughCard doughFactor={doughFactor} />

			<DivideDoughCard />

			<Card id='shape-loaves' className='my-4 border-gray-200 border rounded-md'>
				<CardHeader>
					<CardTitle className='my-2 font-bold'>Shape Into Loaf Forms</CardTitle>
				</CardHeader>
				<CardContent>
					<div id='loaf-form-selector' className='flex m-2'>
						<div className='flex items-center mx-4'>
							<Checkbox className='mr-2' /><p>Loaf Tins</p>
						</div>
						<div className='flex items-center mx-4'>
							<Checkbox className='mr-2' /><p>Round Loaves</p>
						</div>
						<div className='flex items-center mx-4'>
							<Checkbox className='mr-2' /><p>Oblong Loaves</p>
						</div>
					</div>
					<p>Dust the top of each piece of dough lightly with flour.</p>
					<p>Flip and do envelope fold shaping.</p>
					<p>Place into floured baskets or oiled loaf tins.</p>
					<p>Let rise another 2 hours or put into fridge for 8-12, up to 24 hours max.</p>
				</CardContent>
			</Card>

			<Card id='bake-loaves' className='my-4 border-gray-200 border rounded-md'>
				<CardHeader>
					<CardTitle className='my-2 font-bold'>Prep and Bake</CardTitle>
				</CardHeader>
				<CardContent>
					<p>If loaves in fridge, take out about 2 hours before baking time to get them to room temp</p>
					<p>Preheat oven to 500F. If using dutch oven, put it in to preheat.</p>
					<p>Once oven ready, if using tins, mist with a little water on top and put tins straight in.</p>
					<p>Or, if using dutch oven, flip dough from basket, score the top, cover, and put into oven.</p>
					<p>Optionally, can score the top of the loaves in tins at about the 6-8 min mark. Also helps to mist with steam during first 10 mins of baking.</p>
					<p>If dutch oven, take off lid at the 20min mark.</p>
					<p>Bake for about 40-45 mins or until top is dark golden brown.</p>
				</CardContent>
			</Card>

			<Card id='rate-loaves' className='my-4 border-gray-200 border rounded-md'>
				<CardHeader>
					<CardTitle className='my-2 font-bold'>Rate Loaves</CardTitle>
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


		</div>
	)
}