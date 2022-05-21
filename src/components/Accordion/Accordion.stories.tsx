import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {Accordion, } from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('Accordion mode change event fired')

export const MenuCollapsedMode = () => <Accordion title={'Menu'} menu={true} setMenu={callback}/>;
export const UserUnCollapsedMode = () => <Accordion title={'Users'} menu={true} setMenu={callback}/>;

export const ModeChange = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion title={'Users'} menu={value} setMenu={() => setValue(!value)} />
}

