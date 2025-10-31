import React from "react";
import {Messages, func} from "./components/Messages"
import {Mediafiles} from "./components/Media"
export const name='shirisha'
const App = () =>{
    return <>
        <p>App components</p>
        <Messages/>
        {func()}
        <Mediafiles/>
    </>
}
export default App;
export class Helloworld extends React.Component{
    render(){
        return <div>
            <h2>Hello World</h2>
        </div>
    }
}

