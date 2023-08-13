import "../styles/homepage.css"

function HomePage() {
    return(
        <div className="homepage">
            <div className="directory-menu">
                <Menu title="Hats"/>
                <Menu title="Jackets"/>
                <Menu title="Sneakers"/>
                <Menu title="Womens"/>
                <Menu title="Mens"/>
            </div>
        </div>
       
    )
}

const Menu = (props) => {
    return (
        <div className="menu-item">
            <div className="content">
                <h1 className="title"> {props.title} </h1>
                <span className="subtitle"> Shop Now </span>
            </div>
        </div>
    )

}

export default HomePage