import {useState} from "react";


export default {
    title: 'useState'
}

function generateData() {
    console.log('generateData')
    return 1
}

export const Example1 = () => {

    console.log('Example1')

    const [count, setCount] = useState<number>(generateData)

    return <>
        <button onClick={ () => setCount( state => state + 1 ) }> + </button>
        {count}
    </>


}
