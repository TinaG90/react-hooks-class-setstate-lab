import React, { Component } from "react";

class Item extends Component {
  // const [isInCart, setIsInCart] = useState(false);
  constructor(props) {
    super(props);
    this.state = {
      isInCart: false,
    };
  }

  render() {
    const handleAddToCartClick = () => {
      this.setState((state) => ({ isInCart: !this.state.isInCart }));
    };

    return (
      <li className={this.state.isInCart ? "in-cart" : ""}>
        <span>{this.props.name}</span>
        <span className="category">{this.props.category}</span>
        <button
          className={this.state.isInCart ? "remove" : "add"}
          onClick={handleAddToCartClick}
        >
          {this.state.isInCart ? "Remove From" : "Add to"} Cart
        </button>
      </li>
    );
  }
}

export default Item;
