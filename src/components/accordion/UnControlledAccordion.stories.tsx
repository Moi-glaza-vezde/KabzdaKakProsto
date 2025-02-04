import { action } from '@storybook/addon-actions';
import { Accordion } from './Accordion';
import { useState } from 'react';
import { UnControlledAccordion } from './UnControlledAccordion';

export default {
   component: UnControlledAccordion,
};
const items =  [

   {
      id: 1,
      title: 'Dima',
      value: '',
   },
   {
      id: 2,
      title: 'Paha',
      value: '',
   },

   {
      id: 3,
      title: 'Peta',
      value: '',
   }

]
const onChangeHandler = action('onChange');

export const AccordionDemo = () => {
   return <Accordion items={items} closed={false} title={'Opebed Accordion'} setClosed={() => {}} />;
};
