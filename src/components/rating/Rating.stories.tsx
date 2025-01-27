import React from 'react';

import { action } from '@storybook/addon-actions';
import { Rating, RetingValueType } from './Rating';
import { useState } from 'react';

export default {
   title: 'Reating stories',
   component: Rating,
};

export const EmptyStarts = () => <Rating value={0} onClick={() => {}} />;
export const Reating1 = () => <Rating value={1} onClick={() => {}} />;
export const Reating2 = () => <Rating value={2} onClick={() => {}} />;
export const Reating3 = () => <Rating value={3} onClick={() => {}} />;
export const Reating4 = () => <Rating value={4} onClick={() => {}} />;
export const Reating5 = () => <Rating value={5} onClick={() => {}} />;
export const ReatingChange = () => {
   const [rating, setRating] = useState<RetingValueType>(5);

   return <Rating value={rating} onClick={setRating} />;
};
