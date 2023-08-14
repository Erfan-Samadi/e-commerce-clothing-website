import "./style/menu-item.css"

const MenuItem = ({title, image, size}) => {
    return (
        <div className={`menu-item ${size}`} >
            <div className="background-image" style={{ backgroundImage: `url(${image})` }} />
            <div className="content">
                <h1 className="title"> {title.toUpperCase()} </h1>
                <span className="subtitle"> Shop Now </span>
            </div>
        </div>
    )

}

export default MenuItem