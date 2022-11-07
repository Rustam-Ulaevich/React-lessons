import React from "react"
import {useMemo, useState } from "react"

export default {
    title: 'useMemo'
}

export const DifficultCounting = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let result1 = 1
        for(let i=1; i<=a; i++){
            let fake = 0
            while (fake < 1000){
                fake++
                const fakeValue = Math.random()
                console.log(fake)
            }
            result1 = result1 * i
            // console.log(resultA)
        }
        return result1
    }, [a])

    for(let i=1; i<=b; i++){
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => {setA(Number(e.currentTarget.value))}}/>
        <input value={b} onChange={ (e) => {setB(Number(e.currentTarget.value))}}/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}



const UserSecret = (props: { user: Array<string> }) => {
    //console.log('UserSecret')
    return <div>{props.user.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Body = React.memo(UserSecret)


export const HelpsToReactMemo = () => {
    //console.log('Example render')

    const [value, setValue] = useState(0)
    const [users, setUsers] = useState(['Rus', 'Tom', 'Ura', 'Sanya', 'Mike', 'Sem', 'Sasha'])

    const newArray = useMemo( () => {
        const resultArray = users.filter( u => u.toLowerCase().indexOf('s') > -1)
        return resultArray
    }, [users])

    const addUser = () => {
      setUsers([...users, 'Sveta' + new Date().getTime()])
    }

    return <>
        <button onClick={() => {setValue(value + 1)}}>+</button>
        <button onClick={addUser}>Add user</button>
        {value}
        <Body user={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    //console.log('LikeUseCallback')

    const [value, setValue] = useState(0)
    const [users, setUsers] = useState(['Rus', 'Tom', 'Ura', 'Sanya', 'Mike', 'Sem', 'Sasha'])

    const newArray = useMemo( () => {
        const resultArray = users.filter( u => u.toLowerCase().indexOf('s') > -1)
        return resultArray
    }, [users])

    const addUser = () => {
        setUsers([...users, 'Sveta' + new Date().getTime()])
    }

    return <>
        <button onClick={() => {setValue(value + 1)}}>+</button>
        <button onClick={addUser}>Add user</button>
        {value}
        <Body user={newArray}/>
    </>
}
