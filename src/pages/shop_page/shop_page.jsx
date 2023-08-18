import React from "react"
import SHOP_DATA from "./shop_data"
import PreviewCollection from "../../components/preview-collection/preview-collection"
import "./style/shop_page.css"

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state

        return (
            <div className="shop-page">
                <h1> Collections </h1>
                {collections.map( ({ id, ...otherCollectionProps }) => {
                    return <PreviewCollection key={id} {...otherCollectionProps} />
                } )}
            </div>
        )
    }
}

export default ShopPage