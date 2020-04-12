import React from 'react';
import Key from './Key';

export default class Keys extends React.Component {
  constructor(props) {
    super(props);
    const blackKeyCondition = key => key.note.includes('#');
    const createKey = key => <Key key={key.key} note={key.note} code={key.code} />;
    this.blackKeys = this.props.keys.filter(key => blackKeyCondition(key)).map(key => createKey(key));
    this.whiteKeys = this.props.keys.filter(key => !blackKeyCondition(key)).map(key => createKey(key));
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