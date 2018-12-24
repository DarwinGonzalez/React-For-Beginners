import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import samplesFishes from "../sample-fishes";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({
      fishes: fishes //If you put only "fishes" is also valid
    });
  };
  loadSampleFishes = () => {
    this.setState({
      fishes: samplesFishes
    });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}
export default App;
