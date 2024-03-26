import React, { Component } from 'react'

class UserGreet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
         isLoggedIn: false
      }
    }
  render() {
    // ## Short Circuit Operator

    return this.state.isLoggedIn && <div>Welcome Nadim</div>
    
    // ## Ternory Conditional Operator 
    // return this.state.isLoggedIn ? 
    //         <div>Welcome Nadim</div>:
    //         <div>Welcome Guest</div>

    // ## Element Variable Rendering
    // // let message
    // if(this.state.isLoggedIn) {
    //     message = <div>Welcome Nadim</div>
    // }
    // else {
    //     message = <div>Welcome Guest</div>
    // }
    // return message
    
    // ## if/else native
    // if(this.state.isLoggedIn) {
    //     return (
    //         <div>
    //             Welcome Nadim
    //         </div>
    //     )
    // }
    // else {
    //     return (
    //         <div> Welcome guest</div>
    //       )
    // }
    
  }
}

export default UserGreet