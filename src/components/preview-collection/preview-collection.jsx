import CollectionItem from "../collection-item/collection-item"
import "./style/preview-collection.css"

const PreviewCollection = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title"> {title.toUpperCase()} </h1>
            <div className="preview">
                {items.filter(( item, index ) => index < 4)
                .map( ({ id, ...otherProps }) => {
                    return <CollectionItem key={id} {...otherProps} />
                } )}
            </div>
        </div>
    )
}

export default PreviewCollection