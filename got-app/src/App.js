import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/sideBar";
import CharacterDetails from "./components/characterDetails";

class App extends Component {
  state = {
    characters: [],
    selectedCharacterUrl: undefined
  };

  componentDidMount() {
    const url = "https://anapioficeandfire.com/api/houses/362";
    fetch(url)
      .then(resp => resp.json())
      .then(data => this.filterStarkApi(data));
  }

  filterStarkApi = resp => {
    const memberRequests = resp.swornMembers.map(
      charUrl => fetch(charUrl).then(resp => resp.json())
      // .then(character => this.setCharacterState(character))
    );
    Promise.all(memberRequests).then(characters =>
      this.setState({ characters })
    );
  };

  // setCharacterState = character => {
  //   this.setState({
  //     characters: [...this.state.characters, character]
  //   });
  // };

  setSelectedCharacter = characterUrl => {
    this.setState({
      selectedCharacterUrl: characterUrl
    });
  };

  findSelectedCharacter = () =>
    this.state.characters.find(c => c.url === this.state.selectedCharacterUrl);

  render() {
    return (
      <div className="App">
        <SideBar
          characters={this.state.characters}
          selectCharacter={this.setSelectedCharacter}
        />

        {this.state.selectedCharacterUrl !== undefined && (
          <CharacterDetails {...this.findSelectedCharacter()} />
        )}
      </div>
    );
  }
}

export default App;
