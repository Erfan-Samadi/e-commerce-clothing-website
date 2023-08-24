import "./style/custom-button.css"

const CustomButton = ({ children, isGoogleSingIn, ...otherProps }) => {
    return (
            <button className={`${isGoogleSingIn ? "google-sign-in": ""} custom-button`} {...otherProps} > {children} </button>
    )
}

export default CustomButton