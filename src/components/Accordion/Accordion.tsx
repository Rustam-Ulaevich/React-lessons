import React, { useState } from 'react'


type ItemType = {
    title: string
    value: string
}

type AccordionType = {
    title: string
    menu: boolean
    setMenu: (value: boolean) => void
    items: ItemType[]
    onClick: () => void
}

export function Accordion(props: AccordionType ) {
    return <div>
        <AccordionTitle title={props.title}
                        onClick={ ()=> props.setMenu(!props.menu)}/>
        {!props.menu && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

export type AccordionTitleType ={
    title: string
    onClick: () => void
}


 function AccordionTitle(props: AccordionTitleType) {

    return <h3 onClick={(e) => {props.onClick()}}>{props.title}</h3>
}

type AccordionBodyType ={
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyType) {
    return <ul>
        {props.items.map((i, index) => <li onClick={() => (alert(i.title == 'Rustam' ? i.title + ' men' : i.title + ' gerl'))} key={index}> {i.title} </li>)}
    </ul>
}

