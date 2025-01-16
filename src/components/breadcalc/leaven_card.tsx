import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';

interface LeavenCardProps {
	leavenWaterAmount: number;
	leavenStarterAmount: number;
	leavenFlourBlendAmount: number;
}

export const LeavenCard: React.FC<LeavenCardProps> = ({leavenWaterAmount, leavenStarterAmount, leavenFlourBlendAmount}) => {
	return (
				<Card id='leaven-amounts' className='my-4  border-gray-200 border rounded-md'>
				<CardHeader>
					<CardTitle >Make the Leaven</CardTitle>
				</CardHeader>
				<CardContent>
					<div className=''>Ingredients</div>
					<p>{leavenWaterAmount} g water</p>
					<p>{leavenStarterAmount} T starter</p>
					<p>{leavenFlourBlendAmount} g starter flour blend</p>
					<p>Mix together in a bowl. Let sit for 8 hours or overnight.</p>
				</CardContent>
			</Card>
	);
}

export default LeavenCard;