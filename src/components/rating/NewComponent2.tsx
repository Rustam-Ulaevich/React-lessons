import React, {useState} from 'react';

export function NewComponent2(){
    let [kalapsed, setKalapsed] = useState(false)
    let [kalapsed2, setKalapsed2] = useState(false)
    let [kalapsed3, setKalapsed3] = useState(false)

    return <div>
                <p onClick={()=>{setKalapsed(!kalapsed)}}>Super button</p>
                {kalapsed ? <ul>
                    <li>1</li>
                    <li>2</li>
                    <li onClick={()=>{setKalapsed2(!kalapsed2)}}>3
                            {
                                kalapsed2 ? <ul>
                                            <li>1</li>
                                            <li>2</li>
                                        <li onClick={()=>{setKalapsed3(!kalapsed3)}}>3
                                            {
                                                kalapsed3 ? <ul>
                                                        <li>a</li>
                                                        <li>b</li>
                                                        <li>c</li>
                                                    </ul>
                                                    : ''
                                            }

                                        </li>
                                            </ul>
                                    : ''
                            }

                    </li>
                </ul> : ''}
            </div>
}


