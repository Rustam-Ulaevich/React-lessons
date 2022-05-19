import { useState } from "react"

export type ValueRatingType = 1 | 2 | 3 | 4 | 5

type RatingType = {
    value: ValueRatingType,
    onClick: (value: ValueRatingType) => void
}

export const Rating = (props: RatingType) => {
    return <div>
        <Star selec={props.value > 0} setValue={props.onClick} value={1}/>
        <Star selec={props.value > 1} setValue={props.onClick} value={2}/>
        <Star selec={props.value > 2} setValue={props.onClick} value={3}/>
        <Star selec={props.value > 3} setValue={props.onClick} value={4}/>
        <Star selec={props.value > 4} setValue={props.onClick} value={5}/>
   </div>
}

type StarPropsType = {
    selec: boolean
    value:  ValueRatingType
    setValue: (value: ValueRatingType) => void
}

function Star(props: StarPropsType) {
    return <span onClick = { () => {
        debugger
        props.setValue(props.value)}}>
        {props.selec ? <b>star </b> : 'star ' }
    </span>
   }
