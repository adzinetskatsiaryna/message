import React from "react";
import style from './wednes.module.css'
import Input from "./Input";
import  {addStyleAC} from "../../SettingsReducer";
import {connect} from "react-redux";

class Wednesday extends React.Component {

    onChangedStyle = (id, status) => {
        debugger;
        this.props.addStyle(id, status)
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
        let stylePage = this.props.style.find(s => s.status === true)

        return (

            <div className={style[stylePage.name]}>
                {inputRadio}
                    <h1>Hello wednesday</h1>

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
        style: state.settingsReducer.style
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addStyle(id, status){
            const action = addStyleAC(id, status)
            dispatch(action)
        }
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(Wednesday)