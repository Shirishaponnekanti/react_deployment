import {name} from "../App"


export function func (){
    return 9+100
}


export const Messages= () =>{
    return <>
        <h1>Messages</h1>
        <h2>Name: {name}</h2>
        {/* {func()} */}
        <br />
    </>
}


