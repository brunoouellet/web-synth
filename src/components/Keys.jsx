import React from 'react';
import Key from './Key';

export default class Keys extends React.Component {
  constructor(props) {
    super(props);
    this.references = {};
    this.blackKeys = this.props.keys.filter(key => this.isBlackKey(key)).map(key => this.createKey(key));
    this.whiteKeys = this.props.keys.filter(key => !this.isBlackKey(key)).map(key => this.createKey(key));
    this.addKeyboardListeners();
  }

  addKeyboardListeners() {
    const self = this;
    const events = [
      {name: 'keydown', press: true},
      {name: 'keyup', press: false}
    ];

    for (let event of events) {
      document.addEventListener(event.name, e => {
        const keyName = e.key.toLowerCase();
        if (self.references.hasOwnProperty(keyName)) {
          self.references[keyName].current.press(event.press);
        }
      });
    }
  }

  getOrCreateRef(id) {
    if (!this.references.hasOwnProperty(id)) {
      this.references[id] = React.createRef();
    }
    return this.references[id];
  }

  isBlackKey(key) {
    return key.note.includes('#');
  }

  createKey(key) {
    return <Key ref={this.getOrCreateRef(key.key.toLowerCase())} key={key.key} char={key.key} note={key.note} noteAlternative={key.noteAlternative}/>;
  }

  render() {
    return (
      <section className="keys">
        <div className="row row-black">
          {this.blackKeys}
        </div>
        <div className="row row-white">
          {this.whiteKeys}
        </div>
      </section>  
    );
  }
}