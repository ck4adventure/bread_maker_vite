import './App.css'
import { Input } from './components/ui/input';
import { ToggleGroup, ToggleGroupItem } from './components/ui/toggle-group';
import { useState } from 'react';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./components/ui/select";


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

const loafType = "levain";


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
			<div id='main' className='p-8'>
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
					<p>700 g warm water</p>
					<p>200 g leaven</p>
					<p>1000 g flour</p>
					<p>Mix together by hand or with a mixer on low.</p>
					<p>Let rest for 25 mins.</p>
				</div>
				<div>
					<div className='my-2 font-bold'>Salt the Dough</div>
					<p>Add an additional</p>
					<p>50 g water</p>
					<p>22 g salt</p>
					<p>Mix well until salt evenly distributed.</p>
					<p>Put into large bowl, cover, and set aside in a warm area to start proving.</p>
				</div>
				<div id='do-turns'></div>
			</div>

		</>
	)
}

export default App
