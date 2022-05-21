import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewComponent2 } from './NewComponent2';

export default {
    title: 'NewComponent2',
    component: NewComponent2,
}

export const Vie = () => <NewComponent2/>;

export const someFunction = () => <input value={111}/>
