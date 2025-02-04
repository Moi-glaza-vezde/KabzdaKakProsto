import { action } from '@storybook/addon-actions';
import { Accordion } from './Accordion';
import { useState } from 'react';

export default {
   component: Accordion,
};
const items = [

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

export const MenuCollabsedMode = () => {
   return <Accordion closed={true} title={'Menu'} setClosed={onChangeHandler} items={items}/>;
};
export const UserCollabsedMode = () => {
   return <Accordion closed={false} title={'Users'} setClosed={onChangeHandler} items={items} />;
};
export const AccordionDemo = () => {
   let [collapsed, setCollapsed] = useState(false);
   return (
      <Accordion items={items}
         closed={collapsed}
         title={'Opebed Accordion'}
         setClosed={() => setCollapsed(!collapsed)}
      />
   );
};
