import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"email"} validate={[required]} placeholder={"Email"} component={Input}/>
            </div>
            <div>
                <Field name={"password"} type={"password"} validate={[required]} placeholder={"Password"} component={Input}/>
            </div>
            <div>
                <Field name={"rememberMe"} type="checkbox" component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile/23450"}/>
    }

    return <div>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)
