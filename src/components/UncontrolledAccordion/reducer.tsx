import {useReducer} from "react";

type ActionType = { типок: string }

const хуюсер = (стейк: boolean, экшенБлять: ActionType) => {
    console.log('start хусера')
    console.log(стейк)
    console.log(экшенБлять)
  switch (экшенБлять.типок) {
      case 'ONE': return !стейк
      default: return стейк
  }
}

function Список() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>;
}

export function ExampleComponent() {

    let [поебень, дискач] = useReducer(хуюсер, true)
    return <>
        <div onClick={() => {
            дискач({типок: "ONE"})}}>UUUUUUUU</div>
        {поебень && <Список/>}
    </>
}
