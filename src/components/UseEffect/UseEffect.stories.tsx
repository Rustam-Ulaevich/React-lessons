import {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SimpleExample')

    useEffect( () => {
        console.log('useEffect every time')
    })

    useEffect( () => {
        console.log('useEffect render in first didmount')
    }, [])

    useEffect( () => {
        console.log('useEffect render when change counter')
    }, [counter])

    return <>
        Hello, {counter}
        <button onClick={()=>{setCounter(counter+1)}}>C+</button>
        <button onClick={()=>{setFake(fake+1)}}>F+</button>
    </>

}
