import React, { Component } from "react";

class CharacterList extends Component {
  render() {
    return (
      <div className="character-list">
        <h2 onClick={() => this.props.pickCharacter(this.props.url)}>
          {this.props.characterName}
        </h2>
      </div>
    );
  }
}

export default CharacterList;
