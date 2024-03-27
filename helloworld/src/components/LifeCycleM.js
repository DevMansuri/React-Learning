import React, { Component } from 'react'
import LifeCycleMChild from './LifeCycleMChild'

class LifeCycleM extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name : "nadim"
        
      }
      console.log("LifecycleM constructor")
    }

    static getDerivedStateFromProps(props,state) {
        console.log("LifecycleM getDerivedState")
        return null
              
    }

    componentDidMount() {
        console.log("LifecycleM componentDid Mount")
    }
  render() {
    console.log("LifeCycleM render")
    return (
        <div>
            <div><LifeCycleMChild></LifeCycleMChild></div>
            <div>LifeCycleM</div>
        </div>
    
    )
  }
}

export default LifeCycleM