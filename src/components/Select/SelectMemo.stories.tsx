import React, {useMemo, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Select} from './Select';

export default {
    title: 'Select', component: Select,
}

export const WithValue = () => {
    console.log('WithValue rendering')
    const city = [
        {value: '1', title: 'Ufa', contry: 'Russia', capital: false},
        {value: '2', title: 'Kiev', contry: 'Ukraine', capital: true},
        {value: '3', title: 'Minsk', contry: 'Belarus', capital: true},
        {value: '4', title: 'Gomel', contry: 'Belarus', capital: false},
        {value: '5', title: 'Brest', contry: 'Belarus', capital: false},
        {value: '6', title: 'Moscow', contry: 'Russia', capital: true},
        {value: '7', title: 'Odessa', contry: 'Ukraine', capital: false},
        {value: '8', title: 'Donetsk', contry: 'Ukraine', capital: false},
        {value: '9', title: 'Sterlitamak', contry: 'Russia', capital: false},
    ]

    const [cityTitle, setCityTitle] = useState('');
    const [contry, setContry] = useState('');

    const CitiesMemo = () => {
        console.log('1- Все города')
        const [value, setValue] = useState('');
        return <div>
            Все города:<Select onChange={setValue} value={value} items={city}/>
        </div>
    }
    const Cities = React.memo(CitiesMemo)

    const CapitalsMemo = () => {
        console.log('2- Столицы')
        const [capital, setCapital] = useState('');
        return <div>
            Столицы:<Select onChange={setCapital} value={capital} items={city.filter(c => c.capital)}/>
        </div>
    }
    const Capitals = React.memo(CapitalsMemo)

    const RussiaCitiesMemo = () => {
        console.log('3- Российские города')
        const [contry, setContry] = useState('');
        return <div>
            Российские города:<Select onChange={setContry}
                                      value={contry}
                                      items={city.filter(c => c.contry === 'Russia')}/>
        </div>
    }
    const RussiaCities = React.memo(RussiaCitiesMemo)

    const BelarusCitiesMemo = () => {
        console.log('4- Беларусские города')
        const [contry, setContry] = useState('');
        return <div>
            Беларусские города:<Select onChange={setContry}
                                       value={contry}
                                       items={city.filter(c => c.contry === 'Belarus')}/>
        </div>
    }
    const BelarusCities = React.memo(BelarusCitiesMemo)

    const UkraineCitiesMemo = () => {
        console.log('5- Украинские города')
        const [contry, setContry] = useState('');
        return <div>
            Украинские города:<Select onChange={setContry}
                                      value={contry}
                                      items={city.filter(c => c.contry === 'Ukraine')}/>
        </div>
    }
    const UkraineCities = React.memo(UkraineCitiesMemo)

    const [count, setCount] = useState(0)

    return <>
        <div>
            <input type="number" value={count} onChange={(e) => setCount(Number(e.currentTarget.value))}/>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <Cities/>
        <Capitals/>
        <RussiaCities/>
        <BelarusCities/>
        <UkraineCities/>
    </>
}


