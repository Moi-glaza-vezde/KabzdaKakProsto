import { action } from '@storybook/addon-actions';
import { Accordion } from './Accordion';
import { useState } from 'react';
import { UnControlledAccordion } from './UnControlledAccordion';

export default {
   component: UnControlledAccordion,
};

const onChangeHandler = action('onChange');

export const AccordionDemo = () => {
   return <Accordion closed={false} title={'Opebed Accordion'} setClosed={() => {}} />;
};
