import {useState} from 'react'

type TextBodyPropsType = {
    body: string
    garmon: boolean
    onClick: ()=>void
}

export function TextBody(props: TextBodyPropsType){
    let [rating, setRating] = useState(0)
    return <div>
        {props.body}
        <Stars good={rating > 0} setRating={ () => {setRating(1)}}/>
        <Stars good={rating > 1} setRating={ () => {setRating(2)}}/>
        <Stars good={rating > 2} setRating={ () => {setRating(3)}}/>
        <Stars good={rating > 3} setRating={ () => {setRating(4)}}/>
        <Stars good={rating > 4} setRating={ () => {setRating(5)}}/>
    </div>
}

type StartPropsType = {
    good: boolean
    setRating: () => void
}

function Stars(props: StartPropsType) {
    return <span onClick={ () => {props.setRating()}}>
        {props.good ? <b>O</b> : ' 0 '}
    </span>
}
