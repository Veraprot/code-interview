import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Hello React'
    };
  }
  
  handleChange(e) {
    this.setState({value: e.target.value});
  }

  
  render() {
    return(
      <div className="container">
        <h1 className="intro">Binding data with React</h1>
        <div className="box">
          <label className="label">Enter text here</label>
          <input className="input is-medium" type='text' id='input' value={this.state.value} onChange={this.handleChange} />
          <p className="input-value">The value of the input is: <span className="highlight">{this.state.value}</span></p>
        </div>
      </div>
    );
  }
}

export default Input