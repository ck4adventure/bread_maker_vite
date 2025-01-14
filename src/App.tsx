import './App.css'
import { Input } from './components/ui/input';
import { ToggleGroup, ToggleGroupItem } from './components/ui/toggle-group';
import { Checkbox } from "@/components/ui/checkbox"

import { useState } from 'react';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./components/ui/select";

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from './components/ui/button';



const unitTypes = ["kg"];
const defaultUnit = unitTypes[0]; // should be kg

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

// LOAF TYPE
const loafType = "levain";

// INGREDIENTS LEVAIN
// dough factor 1 kg
const breadFlour = 450;
const wheatFlour = 50;
const leaven = 100;
const water = 350;

const addSalt = 11;
const addWater = 25;


function App() {
	const [doughFactor, setdoughFactor] = useState(1);
	const [units, setUnits] = useState(defaultUnit);
	const [leavenWaterAmount, setLeavenWaterAmount] = useState(baseLeavenWaterAmount + factoredLeavenWaterAmount);
	const [leavenFlourBlendAmount, setLeavenFlourBlendAmount] = useState(baseLeavenFlourAmount + factoredLeavenFlourAmount);
	const [leavenStarterAmount, setLeavenStarterAmount] = useState(baseLeavenStarterAmount + factoredLeavenStarterAmount);

	const handledoughFactorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

	return (
		<>
			<div id='headerbar' className='flex justify-center border-blue-100 p-4 bg-indigo-100'>
				<h1 className='text-2xl'>Bread Maker App</h1>
			</div>
			<div id='main' className='p-8 mx-16'>
				<div id='weight-inputs' className='my-4'>
					<div className='my-2 font-bold'>How much bread to make?</div>
					<div className='flex'>
						<div className='w-16'>
							<Input
								type='number'
								min={1} max={10}
								value={doughFactor}
								onChange={handledoughFactorChange}
							>
							</Input>
						</div>
						<div className='w-32'>
							<ToggleGroup
								type="single"
								value={units}
								onValueChange={(val) => {
									if (val) setUnits(val);
								}}>
								{unitTypes && unitTypes.map(type => {
									return <ToggleGroupItem value={type}>{type}</ToggleGroupItem>;
								})}
							</ToggleGroup>
						</div>
					</div>
				</div>
				<div id='leaven-amounts' className='my-4'>
					<div className='my-2 font-bold'>Dough Starter Amounts</div>
					<div className='my-2'>
						<p>{leavenWaterAmount} g water</p>
						<p>{leavenStarterAmount} T starter</p>
						<p>{leavenFlourBlendAmount} g starter flour blend</p>
					</div>
				</div>
				<div id='loaf-type' className='my-4'>
					<div className='my-2 font-bold'>What type of bread?</div>
					<Select>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="choose one" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value={loafType}>{loafType[0].toUpperCase() + loafType.substring(1)}</SelectItem>
							{/* <SelectItem value="dark">Dark</SelectItem>
							<SelectItem value="system">System</SelectItem> */}
						</SelectContent>
					</Select>

				</div>
				<div id='make-dough'>
					<div className='my-2 font-bold'>Make the Dough</div>
					<div className='my-2'>Ingredients</div>
					<p>{water * doughFactor} g warm water</p>
					<p>{leaven * doughFactor} g leaven</p>
					<p>{breadFlour * doughFactor} g bread flour</p>
					<p>{wheatFlour * doughFactor} g wheat flour</p>
					<p>Mix together by hand or with a mixer on low.</p>
					<p>Let rest for 25 mins.</p>
				</div>
				<div id='salt-dough'>
					<div className='my-2 font-bold'>Salt the Dough</div>
					<p>Add an additional</p>
					<p>{addWater * doughFactor} g warm water</p>
					<p>{addSalt * doughFactor} g salt</p>
					<p>Mix well until salt evenly distributed.</p>
					<p>Put into large bowl, cover, and set aside in a warm area to start proving.</p>
					<p>Set a timer for 30min.</p>
				</div>
				<div id='do-turns'>
					<div className='my-2 font-bold'>Do turns</div>
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
				</div>
				<div id='divide-dough'>
					<div className='my-2 font-bold'>Divide Dough and Bench Rest</div>
					<p>Turn dough out onto a clean counter space.</p>
					<p>Sprinkle the top with flour.</p>
					<p>Using a bench scraper, divide dough into as many pieces as you need</p>
					<p>For each piece, flip it over and draw the outside edges up and in to the middle, creating a ball.</p>
					<p>Flip over again so joined side is on the bottom, use scraper to help shape ball and add tension.</p>
					<p>Cover dough ball(s) with towel and let rest 25-40 mins, depending on temp.</p>
					<p>Dough should still have some tension at end of rest, if not, flip and round into ball again and let rest 25 mins.</p>
				</div>
				<div id='shape-loaves'>
					<div className='my-2 font-bold'>Shape Into Loaf Forms</div>
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
				</div>
				<div id='bake-loaves'>
					<div className='my-2 font-bold'>Prep and Bake</div>
					<p>If loaves in fridge, take out about 2 hours before baking time to get them to room temp</p>
					<p>Preheat oven to 500F. If using dutch oven, put it in to preheat.</p>
					<p>Once oven ready, if using tins, mist with a little water on top and put tins straight in.</p>
					<p>Or, if using dutch oven, flip dough from basket, score the top, cover, and put into oven.</p>
					<p>Optionally, can score the top of the loaves in tins at about the 6-8 min mark. Also helps to mist with steam during first 10 mins of baking.</p>
					<p>If dutch oven, take off lid at the 20min mark.</p>
					<p>Bake for about 40-45 mins or until top is dark golden brown.</p>
				</div>
				<div id='rate-loaves'>
					<div className='my-2 font-bold'>Rate Loaves</div>

					<div id='doneness-group' className='flex my-2'>
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
						<div className='my-8 flex justify-between'>
							<Button variant={"outline"}>Reset Form</Button>
							<Button>Save Baking Log</Button>
						</div>

				</div>


			</div>

		</>
	)
}

export default App
