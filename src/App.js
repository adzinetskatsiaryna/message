import React from 'react';
import './App.css';
import {HashRouter, NavLink, Route} from "react-router-dom";

import Tuesday from "./components/tousday/Tuesday";
import Monday from "./components/monday/Monday";
import Louder from "./components/louder/Louder";
import Menu from "./components/menu/Menu";
import {connect} from "react-redux";

class App extends React.Component {
    // state = {
    //     loading: true,
    // };

    componentDidMount() {
        this.props.loadingSet(true);
        setTimeout(() => {
            // this.setState({loading: false});
            this.props.loadingSet(false)
        }, 1000)
    };

    render = () => {
        return(

            this.props.loading
                ?  <Louder />
        :   <HashRouter>
            <div className='app-wrapper'>
                < Menu />
                {/*<Nik/>*/}
                {/*<Avatar/>*/}
                {/*<Messege quality={this.state.qualities}/>*/}
                <Route exact path='/' render={() => <Monday />}/>
                <Route path='/Tuesday' render={() => <Tuesday />}/>
            </div>
        </HashRouter>
        )

        // if(this.props.loading){
        //     return <Louder />
        // } else {
        //     return (
        //         <HashRouter>
        //             <div className='app-wrapper'>
        //                 < Menu />
        //                 {/*<Nik/>*/}
        //                 {/*<Avatar/>*/}
        //                 {/*<Messege quality={this.state.qualities}/>*/}
        //                 <Route exact path='/' render={() => <Monday />}/>
        //                 <Route path='/Tuesday' render={() => <Tuesday />}/>
        //             </div>
        //         </HashRouter>
        //     )
        // }

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

const mapStateToProps = (state) => {
    return {
        loading: state.loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadingSet: (status) => {
            const action = {
                type: "SET_LOADING",
                loading: status
            };
            dispatch(action)
        }
    }
}

const ConnectedApp = connect(mapStateToProps,mapDispatchToProps)(App);
export default ConnectedApp;
