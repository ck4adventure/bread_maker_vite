import { Input } from '@/components/ui/input';
// import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';


import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const unitTypes = ["kg", "lb"];
// LOAF TYPE
const loafType = "levain";


interface RecipeInputsCardProps {
	doughFactor: number;
	handledoughFactorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	units: string;
	handleUnitsChange: (val: string) => void;
	breadType: string;
	handleBreadTypeChange: (type: string) => void;
}

const RecipeInputsCard: React.FC<RecipeInputsCardProps> = ({doughFactor, handledoughFactorChange, units, handleUnitsChange, breadType, handleBreadTypeChange}) => {
	return (
		<Card id='recipe-inputs' className='my-4 border-gray-200 border rounded-md'>
			<CardHeader>
				<CardTitle>Set the Recipe</CardTitle>
			</CardHeader>
			<CardContent className=''>
				<div className=''>
					<div className='m-2 font-bold'>How much bread to make?</div>
					<div className='flex m-2'>
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
								onValueChange={handleUnitsChange}>
								{unitTypes && unitTypes.map(type => {
									return <ToggleGroupItem id={type} value={type}>{type}</ToggleGroupItem>;
								})}
							</ToggleGroup>
						</div>
					</div>
				</div>
				<div className='mt-4'>
					<div className='m-2 font-bold'>What type of bread?</div>
					<div className='m-2'>
						<Select>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="choose one" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value={breadType}>{breadType.toUpperCase() + breadType.substring(1)}</SelectItem>
								{/* <SelectItem value="dark">Dark</SelectItem>
							<SelectItem value="system">System</SelectItem> */}
							</SelectContent>
						</Select>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export default RecipeInputsCard;