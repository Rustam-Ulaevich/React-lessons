import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {Accordion, } from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('Accordion mode change event fired')
const onClickItem = action('DINAROCHKA')

export const MenuCollapsedMode = () => <Accordion title={'Menu'} menu={true} setMenu={callback} items={[]} onClick={onClickItem}/>;
export const UserUnCollapsedMode = () => <Accordion title={'Users'} menu={true} setMenu={callback} onClick={onClickItem}
                                                    items={[
                                                        {title:'Rustam', value: '1'},
                                                        {title:'Gulnara', value: '2'},
                                                        {title:'Diana', value: '3'},
                                                        {title:'Dinara', value: '4'},
                                                        {title:'Samira', value: '5'}
                                                    ]}/>;

export const ModeChange = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion title={'UsersЫ'} menu={value} setMenu={() => setValue(!value)}
                      onClick={onClickItem}
                      items={[
        {title:'Rustam', value: '1'},
        {title:'Gulnara', value: '2'},
        {title:'Diana', value: '3'},
        {title:'Dinara', value: '4'},
        {title:'Samira', value: '5'}
    ]}/>
}



