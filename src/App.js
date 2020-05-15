import React from 'react';
import './App.css';
import Tuesday from "./Tuesday";
import Monday from "./Monday";
import {HashRouter, NavLink, Route} from "react-router-dom";
import Menu from "./Menu";
import louder from './louder.gif'

class App extends React.Component {
    state = {
        loading: true,
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false})
        }, 3000)
    };

    render = () => {
        if(this.state.loading === true){
            return  <div className='louder'><img src={louder}/></div>
        }
        return (
            <HashRouter>
                <div className='app-wrapper'>
                    < Menu />
                    {/*<Nik/>*/}
                    {/*<Avatar/>*/}
                    {/*<Messege quality={this.state.qualities}/>*/}
                    <Route exact path='/' render={() => <Monday />}/>
                    <Route path='/Tuesday' render={() => <Tuesday/>}/>
                </div>
            </HashRouter>
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
