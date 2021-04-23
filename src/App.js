import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shotTypes: [
        "backhand hyzer",
        "forehand hyzer",
        "backhand anhyzer",
        "forehand anhyzer",
        "backhand roller",
        "forehand roller",
        "tomahawk",
        "grenade",
        "thumber"
      ],
      discTypes: [
        "understable putter",
        "overstable putter",
        "straight putter",
        "understable mid",
        "overstable mid",
        "straight mid",
        "understable driver",
        "overstable driver",
        "straight driver"
      ],
      disc: "disc",
      shot: "shot"
    };
  }
  // Math.floor(Math.random() * this.state.shotTypes.length)

  handleClick = () => {
    this.setState({
      disc: this.state.discTypes[Math.floor(Math.random() * this.state.discTypes.length)],
      shot: this.state.shotTypes[Math.floor(Math.random() * this.state.shotTypes.length)]
    })
}



  
  render() {
    return (
      <div className="App">
        <h1>Disc Dice</h1>
        <button onClick={this.handleClick}>roll</button>
        <h2>Throw this disc: {this.state.disc}</h2>
        <h2>On this angle: {this.state.shot}</h2>
      </div>
    );
  }
}

export default App;
