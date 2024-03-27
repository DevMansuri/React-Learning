import React, { Component } from 'react'

export class LifeCycleMChild extends Component {
  
    constructor(props) {
        super(props)
      
        this.state = {
          name : "nadim"
          
        }
        console.log("LifeCycleMChild constructor")
      }
  
      static getDerivedStateFromProps(props,state) {
          console.log("LifeCycleMChild getDerivedState")
          return null
                
      }
  
      componentDidMount() {
          console.log("LifeCycleMChild componentDid Mount")
      }
    render() {
        console.log("LifeCycleM render")
    return (
      <div>LifeCycleMChild</div>
    )
  }
}

export default LifeCycleMChild