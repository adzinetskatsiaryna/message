//
// export saveState = ()=>{
//     let stateAsString = JSON.stringify(this.state);
//     localStorage.setItem("state", stateAsString)
// };
//
// export restoreState = ()=>{
//     let stateAsString = localStorage.getItem("state");
//     if(stateAsString){
//         let state = JSON.parse(stateAsString);
//             state.name.forEach((n)=>{
//                 if(n.id>=this.newNameId){
//                     this.newNameId=n.id+1
//                 }
//             });
//             state.tasks.forEach((t)=>{
//                 if(t.id>=this.newTaskId){
//                     this.newTaskId = t.id +1
//                 }
//             });
//         this.setState(state)
//     }
// };

