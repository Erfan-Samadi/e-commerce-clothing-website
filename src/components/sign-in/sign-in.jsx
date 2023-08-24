import React from "react"
import FormInput from "../form-input/form-input"
import CustomButton from "../custom-button/custom-button"
import { auth, provider } from "../../firebase/firebase.utils"
import { signInWithPopup } from "firebase/auth"
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

    handleChange = event => {
        const {value, name} = event.target

        this.setState({ [name]: value })
    }

    handleGoogle = async () => {
        try{
            await signInWithPopup(auth, provider)
        } catch (err) {
            console.log(`Error! ${err}`)
        }
        
    }


    render() {
        return (
            <div className="sing-in">
                <h2 className="title"> I already have an account </h2>
                <span> sign in with your email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label="Email" name="email" type="email" value={this.state.email} required handleChange={this.handleChange} />
                    <FormInput label="Password" name="password" type="password" value={this.state.password} required handleChange={this.handleChange}  />
                    <div className="button">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={this.handleGoogle} isGoogleSingIn> Sign In with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn