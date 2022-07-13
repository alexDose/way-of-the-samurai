import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../utils/validators";

const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"Login"} validate={[required]} placeholder={"Login"} component={Input}/>
            </div>
            <div>
                <Field name={"Password"} validate={[required]} placeholder={"Password"} component={Input}/>
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

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

export const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onSubmit()}/>
    </div>
}

