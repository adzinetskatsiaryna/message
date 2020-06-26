import React from "react";
import style from './wednes.module.css'
import Input from "./Input";
import  {addStyleAC} from "../../SettingsReducer";
import {connect} from "react-redux";
import {checkInputAC, setLoadingAC, setSendingRequestAC, setStatusAC} from "../../WednasdayReducer";
import {api, tryCatch} from "../../api/api";
import louder from '../louder/louder.gif'

class Wednesday extends React.Component {

    onChangedStyle = (id, status) => {

        this.props.addStyle(id, status)
    };

    onCheckInput=(e)=>{
        this.props.checkInput(e.currentTarget.checked)
    };

    onCheckClick = () => {
        debugger
        this.props.setStatus('INPROGRESS')
        this.props.setLoading(true)
        this.props.setSendingRequest(true)
        api.getRespons(this.props.isCheck)
            .then(response => {

                console.log(response.data)
                this.props.setStatus("SUCCESS")
                this.props.setLoading(false)
                this.props.setSendingRequest(false)
            })
            .catch(error=>{
                this.props.setStatus('ERROR')
                this.props.setSendingRequest(false)
                this.props.setLoading(false)
            })
        // axios.post('https://neko-cafe-back.herokuapp.com/auth/test',{success: this.props.isCheck})
        //     .then(response => {
        //     console.log(response.data)
        // })
    };



    render = () => {

        const inputRadio = this.props.style.map(s => {
            return <Input
                id={s.id}
                name={s.name}
                checked={s.status}
                onChangedStyle={this.onChangedStyle}
                key={s.id}
            />
        });
        
        let stylePage = this.props.style.find(s => s.status === true);

        return (

            <div className={style[stylePage.name]}>
                {inputRadio}
                <h1>Hello wednesday</h1>

                <div>
                    <input type='checkbox' onChange={this.onCheckInput} checked={this.props.isCheck} />
                    <button disabled={this.props.isSendingRequest} onClick={()=>{tryCatch(this.onCheckClick)}}>Send</button>
                    <div>
                        {this.props.isLoading
                            ? <img src={louder}/>
                            :  <div>{this.props.status}</div>
                        }
                    </div>

                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque velit lectus, semper quis tortor vestibulum, finibus
                    mattis urna. Vestibulum dictum ante nec sem pharetra, in finibus nisi accumsan.
                    Morbi elementum lorem at nulla rutrum gravida. Proin in est sit amet orci iaculis
                    efficitur eu quis augue. Aenean laoreet vel urna ut scelerisque. Vestibulum facilisis
                    enim felis, nec ornare diam dignissim ut. Nunc neque libero, faucibus sed ante nec,
                    gravida bibendum risus.
                    Suspendisse potenti. Phasellus in tincidunt arcu, in
                    iaculis metus. Proin ac nunc in velit cursus placerat id at felis.
                    Integer feugiat maximus nisi. Pellentesque a malesuada tellus, non semper dolor.
                    Aenean malesuada elit hendrerit leo elementum, ac lacinia neque commodo.
                    Sed malesuada enim sit amet pellentesque semper.
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        style: state.settingsReducer.style,
        isCheck: state.wednesdayReducer.isCheck,
        isSendingRequest: state.wednesdayReducer.isSendingRequest,
        status: state.wednesdayReducer.status,
        isLoading: state.wednesdayReducer.isLoading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addStyle(id, status){
            const action = addStyleAC(id, status);
            dispatch(action)
        },
        checkInput(checked){
            const action=checkInputAC(checked);
            dispatch(action)
        },
        setLoading(loading){
            const action=setLoadingAC(loading)
            dispatch (action)
        },
        setStatus(status){
            const action= setStatusAC(status)
            dispatch(action)
        },
        setSendingRequest(request){
            const action = setSendingRequestAC(request)
            dispatch(action)
        }
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(Wednesday)