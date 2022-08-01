import {ChangeEvent, useState} from "react"

type TitleType = {
    title: string
}

type TextType = {
    text: Array<TitleType>
}

export function Trening() {

    const [valueInput, setValueInput] = useState('')
    const [text, setText] = useState<Array<TitleType>>([])

    const onChangeHeandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValueInput(event.currentTarget.value)
    }
    console.log(valueInput)

    const onClickHandler = (t: any) => {
        const newText = t
        setText([newText, ...text])
        setValueInput('')
    }

    return <>
        <input value={valueInput} onChange={onChangeHeandler}/>
        <button onClick={() => onClickHandler(valueInput)}>+</button>
        <div>
            <ol>
                {text.map(t => <li>{t}</li>)}
            </ol>

        </div>
    </>
}
