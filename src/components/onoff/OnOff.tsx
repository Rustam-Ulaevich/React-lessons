type PropsType = {
    on: boolean
    setOn: (on: boolean)=>void
}

export function OnOff(props: PropsType){

    let onStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'yellow' : 'white'
     }
    let offStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        color: !props.on ? 'white' : 'black',
        backgroundColor: !props.on ? 'black' : 'white'
    }
    let lampStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        borderRadius: '15px',
        display: 'inline-block',
        marginLeft: '10px',
        color: !props.on ? 'white' : 'black',
        backgroundColor: !props.on ? 'black' : 'yellow'

    }

    return <div>
        <div style={onStyle}
             onClick={ () => {props.setOn(!props.on)}}>On</div>
        <div style={offStyle}
             onClick={ () => {props.setOn(!props.on)}}>Off</div>
        <br/>

        <div style={lampStyle}>lamp</div>
    </div>
}

