import React from "react"
import { useState } from "react"

export default {
    title: 'Хуета'
}

const Counter = (props: { count: number }) => {
    return<div>{props.count}</div>
}

const BodySecret = (props: { user: Array<string> }) => {
    return <div>{props.user.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Body = React.memo(BodySecret)

export const Example = () => {
    console.log('Example render')


    const [value, setValue] = useState(0)
    const [users, setUsers] = useState(['Rus', 'Tom', 'Ura'])

    const addUser = () => {
        setUsers([...users, ('sveta' + new Date().getTime())])
    }
    console.log(users)

    return <>
        <button onClick={() => {setValue(value + 1)}}>+</button>
        <Counter count={value}/>

        <button onClick={addUser}>addUser</button>
        <Body user={users}/>
    </>
}
