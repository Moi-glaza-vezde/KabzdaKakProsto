import { action } from '@storybook/addon-actions';
import { Accordion } from './Accordion';
import { useState } from 'react';

export default {
   component: Accordion,
};

const onChangeHandler = action('onChange');

export const MenuCollabsedMode = () => {
   return <Accordion closed={true} title={'Menu'} setClosed={onChangeHandler} />;
};
export const UserCollabsedMode = () => {
   return <Accordion closed={false} title={'Users'} setClosed={onChangeHandler} />;
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
