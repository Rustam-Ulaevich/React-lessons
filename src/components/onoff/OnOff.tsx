type PropsType = {
    on: boolean
    setOn: (on: boolean)=>void
}

export function OnOff(props: PropsType){
    return <div>
        <div className={'on'}
             onClick={ () => {props.setOn(!props.on)}}>On</div>
        <div className={'off'}
             onClick={ () => {props.setOn(!props.on)}}>Off</div>
        <div className={'lamp'}>lamp</div>
    </div>
}
