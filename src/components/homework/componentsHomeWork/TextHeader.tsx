type PropsType = {
    header: string
    onClick: () => void
}

export function TextHeader(props: PropsType){
    return <div  onClick={()=>{props.onClick()}}>
       -{props.header}-
    </div>
}
