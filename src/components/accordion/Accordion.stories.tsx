import { action } from '@storybook/addon-actions';
import { Accordion } from './Accordion';
import { useState } from 'react';

export default {
   component: Accordion,
};

const onChangeHandler = action('onChange');

export const CollapsedAccordion = () => {
   return <Accordion closed={true} title={'Collapsed Accordion'} setClosed={onChangeHandler} />;
};
export const OpenAccordion = () => {
   return <Accordion closed={false} title={'Opebed Accordion'} setClosed={() => {}} />;
};
export const AccordionDemo = () => {
   let [collapsed, setCollapsed] = useState(false);
   return (
      <Accordion
         closed={collapsed}
         title={'Opebed Accordion'}
         setClosed={() => setCollapsed(!collapsed)}
      />
   );
};
