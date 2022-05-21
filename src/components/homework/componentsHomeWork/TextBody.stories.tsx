import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextBody } from './TextBody';
import { action } from '@storybook/addon-actions';


export default {
    title: 'TextBody',
    component: TextBody,
}

const gmat = action('some text')


export const EmptyStar = () => <TextBody body={'STARS:'} garmon={true} onClick={gmat}/>;

export const Example = () => <TextBody body={'STARS:'} garmon={false} onClick={gmat}/>;

