import React from 'react';
import synth from '../synth/synth';

export default class Key extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.baseOctave = 4;
  }

  handleMouseDown() {
    this.press(true);
  }

  handleMouseUp() {
    this.press(false);
  }

  press(isPressed) {
    this.setState({
      pressed: isPressed
    });

    if (isPressed) {
      synth.triggerAttack(this.props.note + this.baseOctave, '+0.05');
    } else {
      synth.triggerRelease(this.props.note + this.baseOctave, '+0.05');
    }
  }

  renderNote() {
    return this.props.noteAlternative ? this.props.noteAlternative + '/ ' + this.props.note : this.props.note;
  }

  render() {
    return (
      <div className={`key ${this.state.pressed ? 'pressed' : ''}`} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>
        <div className="note">{this.renderNote()}</div>
        <div className="char">{this.props.char}</div>
      </div>
    );
  }
}