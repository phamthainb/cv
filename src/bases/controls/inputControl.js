import React, { Component } from "react";

class InputControl extends Component {
  constructor(props) {
    super(props);
    if (this.props.type === "checkbox") {
      this.state = {
        id: this.props.index,
        status: this.props.objValue.status,
        label: this.props.objValue.label,
        name: this.props.name
      };
    } else {
      this.state = {
        [this.props.name]: this.props.value
      };
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.type === "checkbox") {
      this.setState({
        id: nextProps.index,
        status: nextProps.objValue.status,
        label: nextProps.objValue.label,
        name: nextProps.name
      });
    } else {
      this.setState({
        [this.props.name]: nextProps.value
      });
    }
  }
  onChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    if (target.type === "checkbox") {
      this.setState(state => {
        return { status: value };
      });
      this.props.onBlur({
        ...this.state,
        status: value
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  };
  onBlur = () => {
    this.props.onBlur(this.state);
  };
  render() {
    const { type } = this.props;
    if (type === "checkbox") {
      return (
        <input
          type={type}
          name={this.props.name}
          value={this.state[this.props.name]}
          onChange={this.onChange}
          checked={this.state.status}
        />
      );
    } else if (type === "radio") {
      var check =
        this.props.check === this.state[this.props.name] ? true : false;
      return (
        <input
          type={type}
          name={this.props.name}
          value={this.state[this.props.name]}
          onChange={this.onBlur}
          placeholder={this.props.placeholder ? this.props.placeholder : ""}
          checked={check}
        />
      );
    } else {
      return (
        <input
          type={type}
          className={this.props.className}
          name={this.props.name}
          value={this.state[this.props.name]}
          onChange={this.onChange}
          onBlur={this.onBlur}
          placeholder={this.props.placeholder ? this.props.placeholder : ""}
        />
      );
    }
  }
}
export default InputControl;
