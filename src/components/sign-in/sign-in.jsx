import React from "react"
import FormInput from "../form-input/form-input"
import CustomButton from "../custom-button/custom-button"
import { signInwithGoogle } from "../../firebase/firebase.utils"
import "./style/sign-in.css"


class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({ email:"", password:"" })
    }

    handleSubmit = event => {
        const {value, name} = event.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sing-in">
                <h2 className="title"> I already have an account </h2>
                <span> sign in with your email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label="Email" name="email" type="email" value={this.state.email} required handleChange={this.handleSubmit} />
                    <FormInput label="Password" name="password" type="password" value={this.state.password} required handleChange={this.handleSubmit}  />

                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton onClick={signInwithGoogle}> Sign In with Google </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn