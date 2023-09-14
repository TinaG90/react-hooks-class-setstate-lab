import React, { Component } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

class App extends Component {
  // const [items, setItems] = useState(itemData);
  // const [isDarkMode, setIsDarkMode] = useState(false);
  constructor(props) {
    super(props);
    this.state = {
      items: itemData,
      isDarkMode: false,
    };
  }
  render() {
    const handleDarkModeClick = () => {
      // console.log("mode button pushed");
      this.setState((state) => ({ isDarkMode: !this.state.isDarkMode }));
    };

    return (
      <div className={"App " + (this.state.isDarkMode ? "dark" : "light")}>
        <header>
          <h2>Shopster</h2>
          <button onClick={handleDarkModeClick}>
            {this.state.isDarkMode ? "Dark" : "Light"} Mode
          </button>
        </header>
        <ShoppingList items={this.state.items} />
      </div>
    );
  }
}
export default App;
