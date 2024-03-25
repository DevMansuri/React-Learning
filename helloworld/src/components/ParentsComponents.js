
import React, { Component } from 'react'
import ChildComponents from './ChildComponents'

class ParentsComponents extends Component {
    constructor(props) {
        super(props) 
            this.state = {
                parentName :'parent'
            }
        this.greetParent = this.greetParent.bind(this)    


    }

    greetParent() {
        alert(`Hello ${this.state.parentName}`)
    }
  render() {
    return (
      <div> 
        <ChildComponents greetHandler = {this.greetParent}> 
        </ChildComponents>
      </div>
    )
  }
}
export default ParentsComponents
