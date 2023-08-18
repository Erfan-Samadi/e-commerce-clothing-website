import React from "react"
import MenuItem from "../menu-item/menu-item"
import "./style/directory.css"
import SectionsData from "./sections_data"

class Directory extends React.Component {
    constructor() {
        super()
        this.state = {
            sections: SectionsData
        }
    }
    render () {
        return (
            <div className="directory-menu">
                {this.state.sections.map( ({id, ...otherSectionProps}) => {
                   return <MenuItem key={id} {...otherSectionProps} />
                })}
            </div>
        )}
        
    }
   

export default Directory