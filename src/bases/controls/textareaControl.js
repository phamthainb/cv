import React, { Component } from "react";

class TextareaControl extends Component {
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
  Change = e => {
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
    return(
        <textarea
        className={this.props.className}
            name={this.props.name}
            value={this.state[this.props.name]}
            onChange={this.onChange}
            onBlur={this.onBlur}
            placeholder={this.props.placeholder ? this.props.placeholder : ""}
          />
    )
  }
}
export default TextareaControl;
