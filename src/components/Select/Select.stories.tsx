import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Select} from './Select';

export default {
    title: 'Select', component: Select,
}

export const WithValue = () => {
    const [value, setValue] = useState('1');
    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Rustam'},
                    {value: '2', title: 'Gulnara'},
                    {value: '3', title: 'Diana'},
                    {value: '4', title: 'Dinara'},
                    {value: '5', title: 'Samira'},
                ]}
        />
    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null);
    <Select onChange={setValue}
            items={[{value: '1', title: 'Rustam'},
                {value: '2', title: 'Gulnara'},
                {value: '3', title: 'Diana'},
                {value: '4', title: 'Dinara'},
                {value: '5', title: 'Samira'},]}/>
}

