
import { useState } from 'react';


import RecipeInputsCard from './breadcalc/inputs_card';
import LeavenCard from "./breadcalc/leaven_card";
import CreateDoughCard from "./breadcalc/create_dough_card";
import SaltDoughCard from "./breadcalc/salt_dough_card";
import DivideDoughCard from './breadcalc/divide_dough_card';
import ShapeDoughCard from './breadcalc/shape_loaves_card';
import BakeLoavesCard from './breadcalc/bake_loaves_card';
import RateLoavesCard from './breadcalc/rate_loaves_card';



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

			<ShapeDoughCard />

			<BakeLoavesCard />

			<RateLoavesCard />

		</div>
	)
}