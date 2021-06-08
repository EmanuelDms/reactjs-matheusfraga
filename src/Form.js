import React, { Component } from 'react'

class TypeStuffIn extends Component {
  constructor() {
    super()
    this.state = {
      input: []
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange() {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="input"
          value={this.state.input}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default TypeStuffIn
