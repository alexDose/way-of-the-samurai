import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"Login"} placeholder={"Login"} component={"input"}/>
            </div>
            <div>
                <Field name={"Password"} placeholder={"Password"} component={"input"}/>
            </div>
            <div>
                <Field name={"rememberMe"} type="checkbox" component={"input"}/> remember me
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

