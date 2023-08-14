import React, { useState } from 'react'
import './styles/App.css'
import CardList from './components/card-list/card-list'

class App extends React.Component {

 constructor(){
  super()
  this.state = {
    monsters: [],
    searchField: ""
  }
 }

componentDidMount() {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then( response => response.json() )
  .then( data => this.setState({ monsters: data }) )
}

 render() {
  const { monsters, searchField } = this.state
  const filteredMonsters = monsters.filter( monster => {
    return monster.name.toLowerCase().includes(searchField.toLowerCase())
  })

  return(
    <div className="page">
      <input type="text" onChange={ (event) => this.setState({ searchField: event.target.value }) }/>
      <CardList monsters={filteredMonsters} />
        

    </div>
    
  )
 }
}

export default App
