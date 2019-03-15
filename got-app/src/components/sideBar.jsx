import React, { Component } from "react";
import CharacterList from "./characterList";

class SideBar extends Component {
  selectCharacter = characterUrl => {
    this.props.selectCharacter(characterUrl);
  };

  render() {
    const createList = this.props.characters.map(character => (
      <CharacterList
        characterName={character.name}
        character={character}
        url={character.url}
        pickCharacter={this.selectCharacter}
      />
    ));

    return <div className="side-nav">{createList}</div>;
  }
}

export default SideBar;
