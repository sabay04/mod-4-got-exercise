import React, { Component } from "react";

class CharacterDetails extends Component {
  //   createLi = array => {
  //     array.map(el => {
  //       return <li>{el}</li>;
  //     });
  //   };

  render() {
    const { name, gender, titles, aliases, dead } = this.props;
    return (
      <div className="character-card">
        <p>{name}</p>
        <p>{gender}</p>
        <p>{console.log(titles)}</p>
        {/* <ul>{this.createLi(titles)}</ul> */}
        <ul>
          Titles:
          {titles.map(title => {
            return <li>{title}</li>;
          })}
        </ul>

        <ul>
          Aliases:
          {aliases.map(alias => {
            return <li>{alias}</li>;
          })}
        </ul>
        <button>like</button>
      </div>
    );
  }
}

// const CharacterDetails = ({ name, gender, titles, aliases }) => {
//   return (
//     <div className="character-card">
//       <p>{name}</p>
//       <p>{gender}</p>
//       <p>{console.log(titles)}</p>

//       <ul>{for(let i=0; i < titles.length; i++) {
//         <li>title[i]</li>
//     }}</ul>
//       <button>like</button>
//     </div>
//   );
// };

export default CharacterDetails;
