import React, {Component} from 'react';
import './Avatar.scss';

class Avatar extends Component {

  static defaultProps = {
    label: 'Click to edit'
  }

  constructor(props) {
    super(props);
    
    this.state = {
      file: undefined,
      editState: false
    }
  }

  handleClick = () => {
    if (this.inputFile) {
      this.inputFile.click();
    }
  };

  handleFileChoose = () => {
  };

  render() {
    return (
      <div className="Avatar" onClick={this.handleClick}>
        <div>{this.props.label}</div>
        <input
            type="file"
            ref={inputFile => this.inputFile = inputFile}
            onChange={this.handleFileChoose}
        />
      </div>
    );
  }
}

export default Avatar;