import React, { Component } from "react";

class SelectControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      [this.props.name]: this.props.value
    };
  }
  componentWillReceiveProps(nextProps) {
      this.setState({
        [this.props.name]: nextProps.value
      });
  }
  onChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  onBlur = () => {
    this.props.onBlur(this.state);
  };
  render() {
      return (
        <select
          key={this.props.name}
          className="form-control"
          required="required"
          name="status"
          onChange={this.onChange}
          onBlur={this.onBlur}
          value = {this.state[this.props.name]}
        >
          {this.props.children}
        </select>
      )
  }
}
export default SelectControl;
