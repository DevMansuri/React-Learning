import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName : '',
         password : ''
      }
    }
    handleUserName = event => {
        this.setState({
            userName: event.target.value
        })
    }
    handlePassword = event => {
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.userName}`)
        event.preventDefault()

    }
  render() {
    return (
    <form onSubmit={this.handleSubmit}>
        <div>
            <label>
                Username
            </label>
            <input type='text' value={this.state.userName} onChange={this.handleUserName} ></input>
        </div>
        <div>
            <label>
                Password
            </label>
            <input type='text' value={this.state.password} onChange={this.handlePassword} ></input>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>
    )
  }
}
export default Form
