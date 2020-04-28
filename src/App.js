import React from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from "./components/avatar/avatar";
import Messege from "./components/messege/messege";
import Nik from "./components/nik/nik";
import AddName from "./AddName";
import Names from "./Names";

class App extends React.Component {

    state = {
        counter: 0,
        qualities: [
            {id: 0, title: 'communist', type: false},
            {id: 1, title: 'liberall', type: true},
            {id: 2, title: 'monarchist', type: false},
            {id: 3, title: 'anarchist', type: false},
            {id: 4, title: 'nationalist', type: false},
        ],
        names: [
            {id: 0, name: 'Katerina'},
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Timon'},
        ]
    };

    addName = (newAddName) => {
        let newName = {id: 3, name: newAddName}
        let newNames = [...this.state.names, newName]

        this.setState(
            {
                names: newNames,
                counter: ++this.state.counter
            }
        );

    };

    render = () => {

        return (
            <div className='app-wrapper'>
                <Nik/>
                <Avatar/>
                <Messege quality={this.state.qualities}/>
                <AddName addName={this.addName} counter={this.state.counter}/>
                <Names names={this.state.names} />
                {/*<div className='addName'>*/}
                {/*    <span className='counter'>{this.state.counter}</span>*/}
                {/*    <input type='text' ref={this.click} placeholder='add name'/>*/}
                {/*    <button onClick={this.addAlert}>click me</button>*/}
                {/*</div>*/}
            </div>
        )

    }
}


// const App = () => {
//
//     let click = React.createRef();
//     let counter = React.createRef();
//     let state = {
//         start: 0
//     }
//
//     let addAlert = function(){
//
//         state.start = ++state.start
//         alert('Hello' + ' ' + click.current.value);
//         click.current.value = '';
//     };
//     let qualities = [
//         {id:0, title: 'communist', type: false},
//         {id:1, title: 'liberall', type: true},
//         {id:2, title: 'monarchist', type: false},
//         {id:3, title: 'anarchist', type: false},
//         {id:4, title: 'nationalist', type: false},
//     ];
//
//     return (
//         <div className='app-wrapper'>
//             <Nik/>
//             <Avatar/>
//             <Messege quality={qualities}/>
//             <div>
//                 <span ref={counter}>{state.start}</span>
//                 <input type='text' ref={click} placeholder='add name'/>
//                 <button onClick={addAlert}>Enter</button>
//             </div>
//         </div>
//     )
// }
export default App;
