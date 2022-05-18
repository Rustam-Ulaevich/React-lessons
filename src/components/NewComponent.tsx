type NewComponentType = {
    value: boolean
    setValue: (value: boolean)=>void
}

export function NewComponent(props: NewComponentType){
    return <div>
        <button onClick={()=>{props.setValue(!props.value)}}>--!--</button>
        { props.value ? <div>!!!!!!!!! </div> : '-----'}
    </div>
}
