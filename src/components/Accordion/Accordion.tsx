import React, { useState } from 'react'
export type PropsType = {
    title: string
    body: string
    menu: boolean
    setMenu: (value: boolean) => void
}

export function Accordion(props: PropsType ) {
    return <div>
        <AccordionTitle title={props.title}
                        onClick={ ()=> props.setMenu(!props.menu)}/>
        {!props.menu && <AccordionBody body={props.body}/>}
    </div>
}

export type AccordionTitleType ={
    title: string
    onClick: () => void
}


 function AccordionTitle(props: AccordionTitleType) {
    return <div onClick={() => {props.onClick()}}>{props.title}</div>
}

type AccordionBodyType ={
    body: string
}

function AccordionBody(props: AccordionBodyType) {
    return <div><div>{props.body}</div>
    <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
    </div>
}

