import React from 'react';

import { action } from '@storybook/addon-actions';

import { useState } from 'react';
import { UnonOff } from './UnonOff';

export default {
   title: 'UnOnOff stories',
   component: UnonOff,
};
const callBack = action('on or off clicked');

export const OnMode = () => {
   return <UnonOff onChange={() => {}} />;
};
export const OfMode = () => {
   return <UnonOff onChange={() => {}} />;
};
