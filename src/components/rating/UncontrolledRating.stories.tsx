import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { UncontrolledRating } from './UncontrolledRating';


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
}

const gmat = action('some text')


export const Rider = () => <UncontrolledRating selected={true} setValue = {5} value={5}/>;

// export const Example = () => <TextBody body={'STARS:'} garmon={false} onClick={gmat}/>;

