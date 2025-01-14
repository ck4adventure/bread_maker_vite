import './App.css'
import { Input } from './components/ui/input';
import { ToggleGroup, ToggleGroupItem } from './components/ui/toggle-group';
import { useState } from 'react';

const unitTypes = ["kg"];
const defaultUnit = unitTypes[0]; // should be kg

// 2 1kg loaves dough needs 200g starter leaves 200g
// 1kg needs 100 starter leaves 200
const baseWaterAmount = 100; // for refresh
const baseStarterBlendAmount = 100; 
const baseStarterAmount = 0.5;

// then the amounts for how much dough we are making
// dough factor 1 KG
const doughWaterAmount = 50; // for 1 1kg loaf (2lb loaf)
const doughStarterBlendAmount = 50; // for 1kg loaf (2lb loaf)
const doughStarterAmount = 0.5; // half tablespoon for each loaf


function App() {
	const [doughFactor, setdoughFactor] = useState(1);
	const [units, setUnits] = useState(defaultUnit);
	const [starterWaterAmount, setStarterWaterAmount] = useState(baseWaterAmount + doughWaterAmount);
	const [starterFlourAmount, setStarterFlourAmount] = useState(baseStarterBlendAmount + doughStarterBlendAmount);
	const [starterAmount, setStarterAmount] = useState(baseStarterAmount + doughStarterAmount);

	const handledoughFactorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.value) {
			const newdoughFactor = Number(event.target.value);
			setdoughFactor(newdoughFactor);
			const newWater = baseWaterAmount + (newdoughFactor * doughWaterAmount);
			const newStarter = baseStarterAmount + (newdoughFactor * doughStarterAmount);
			const newFlour = baseStarterBlendAmount + (newdoughFactor * doughStarterBlendAmount);
			setStarterWaterAmount(newWater);
			setStarterAmount(newStarter);
			setStarterFlourAmount(newFlour);
		}
	}

	return (
		<>
			<div id='headerbar' className='flex justify-center border-blue-100 p-4'>
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
				<div id='starter-amounts' className='my-4'>
					<div className='my-2 font-bold'>Dough Starter Amounts</div>
					<div className='my-2'>
						<p>{starterWaterAmount} g water</p>
						<p>{starterAmount} T starter</p>
						<p>{starterFlourAmount} g starter flour blend</p>
					</div>
				</div>
			</div>

		</>
	)
}

export default App
