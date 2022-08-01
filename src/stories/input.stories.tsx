import { action } from '@storybook/addon-actions'
import React, { useState } from 'react'

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>
export const AlertValueUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChangeHeandler = (event: React.ChangeEvent<HTMLInputElement> ) => {
      setValue(event.currentTarget.value)
    }

    return <>
        <input value={value} onChange={onChangeHeandler}/> =  {value}
    </>
}
export const AlertButtonValueUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChangeHeandler = (event: React.ChangeEvent<HTMLInputElement> ) => {
      setValue(event.currentTarget.value)
    }

    const onClickHeandler = (value: string) => {
      setValue(value)
    }
    return <>
        <input /> <button onClick={() => onClickHeandler('dfg') }>=</button> 4444{value}
    </>
}

export const ControledInput = () => {
    const [parentValue, setParentValue] = useState('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={ onChange }/>
}

export const ControlledCheckbox= () => {
const [parentValue, setParentValue] = useState(false);
const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    action('привет');
    setParentValue(e.currentTarget.checked)
}

return <input type='checkbox' checked={parentValue} onChange={onChange}/>
}

export const ControlSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined> ('1');
    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        action('привет');
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Rustam</option>
        <option value={'2'}>Gulnara</option>
        <option value={'3'}>Diana</option>
        <option value={'4'}>Dinara</option>
        <option value={'5'}>Samira</option>

    </select>

}
