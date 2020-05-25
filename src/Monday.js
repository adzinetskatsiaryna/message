import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddName from "./AddName";
import Names from "./Names";


class Monday extends React.Component {

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("state", stateAsString)
    };

    restoreState = () => {
        let stateAsString = localStorage.getItem("state");
        if (stateAsString) {
            let state = JSON.parse(stateAsString);
            state.names.forEach((n) => {
                if (n.id >= this.newNameId) {
                    this.newNameId = n.id + 1
                }
            });
            this.setState(state)
        }
    };

    componentDidMount() {
        this.restoreState()
    }

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
            // {id: 0, name: 'Katerina'},
            // {id: 1, name: 'Ivan'},
            // {id: 2, name: 'Timon'},
        ],
    };


    newNameId = 0;
    addName = (newAddName) => {
        let newName = {id: this.newNameId, name: newAddName};
        let newNames = [...this.state.names, newName];
        this.newNameId++;
        this.setState(
            {
                names: newNames,
                counter: this.state.counter + 1,
            }, this.saveState);

    };

    render = () => {

        return (
            <div>
                <AddName
                    addName={this.addName}
                    counter={this.state.counter}
                />
                <Names names={this.state.names} />
            </div>
        )

    }
}


//
export default Monday;
