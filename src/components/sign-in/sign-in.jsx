import React, {Component} from "react"
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
                <h2> I already have an account </h2>
                <span> sign in with your email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" value={this.state.email} required onChange={this.handleSubmit} />
                    <label> Email </label>
                    <input name="password" type="password" value={this.state.password} required onChange={this.handleSubmit}  />
                    <label> Password </label>

                    <input type="submit" vlaue="Submit" />
                </form>
            </div>
        )
    }
}

export default SignIn