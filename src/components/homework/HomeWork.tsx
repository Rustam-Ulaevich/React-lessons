import {TextHeader} from './componentsHomeWork/TextHeader'
import {TextBody} from './componentsHomeWork/TextBody'
import { useState } from 'react'

type PropsType = {
    textheader: string
    textbody: string
}

export function HomeWork(props: PropsType){

    let [garmon, setGarmon] = useState(false)

    return <div>

        <TextHeader header={props.textheader} onClick={()=>{setGarmon(!garmon)}}/>
        { !garmon && <div>
        {/*<TextBody body={props.textbody} garmon={true}/>*/}
        {/*<TextBody body={props.textbody} garmon={true} rating={1}/>*/}
        {/*<TextBody body={props.textbody} garmon={true} rating={2}/>*/}
        {/*<TextBody body={props.textbody} garmon={true} rating={3}/>*/}
        {/*<TextBody body={props.textbody} garmon={true} rating={4}/>*/}
        {/*<TextBody body={props.textbody} garmon={true} rating={5}/>*/}
            </div>
        }
    </div>
}
