import React from 'react';

import { action } from '@storybook/addon-actions';

import { useState } from 'react';
import { OnOff } from './onOff';

export default {
   title: 'OnOff stories',
   component: OnOff,
};
const callBack = action('on or off clicked');

export const OnMode = () => {
   return <OnOff on={true} setOn={callBack} />;
};
export const OfMode = () => {
   return <OnOff on={false} setOn={callBack} />;
};
export const ModeChanging = () => {
   const [value, setValue] = useState<boolean>(false);
   return <OnOff on={value} setOn={setValue} />;
};
