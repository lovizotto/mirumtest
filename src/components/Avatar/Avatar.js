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

  render() {
    return (
      <div className="Avatar" onClick={() => {}}>
        <div>{this.props.label}</div>
        <input type="file"/>
      </div>
    );
  }
}

export default Avatar;