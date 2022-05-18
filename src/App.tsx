import React, {useState} from 'react';
import './App.css';
import { Accordion } from './components/Accordion';
import { OnOff } from './components/onoff/OnOff';
import {Rating, ValueRatingType} from './components/rating/Rating';
import { UncontrolledRating } from './components/rating/UncontrolledRating';
import {HomeWork} from './components/homework/HomeWork'
import { NewComponent } from './components/NewComponent';

function App() {

    let [valueRating, setValueRating] = useState<ValueRatingType>(1)
    let [menu, setMenu] = useState(true)
    let [on, setOn] = useState(false)
    let [newComp, setNewComp] = useState(false)

    return <div className='App'>
        {/*<Rating value={valueRating} onClick={setValueRating}/>*/}
        {/*<HomeWork*/}
        {/*    textheader={'Many many text'} textbody={'Tasks: '}/>*/}
        {/*<Accordion title='Heading'*/}
        {/*           body='Text'*/}
        {/*           menu={menu}*/}
        {/*           setMenu={setMenu}/>*/}
        {/*<NewComponent value={newComp}*/}
        {/*              setValue={setNewComp}/>*/}

        <UncontrolledRating />

        {/*<OnOff on={on} setOn={setOn}/>*/}

    </div>
}

export default App;
