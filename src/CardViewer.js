import React from 'react';
import './CardViewer.css';

import { Link } from 'react-router-dom';

class CardViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFront: true,
      currentIndex: 0,
    };
  }

  nextCard = () => {
    if (this.state.currentIndex < this.props.cards.length - 1) {
      this.setState({
        displayFront: true,
        currentIndex: this.state.currentIndex + 1,
      });
    }
  };

  prevCard = () => {
    if (this.state.currentIndex > 0) {
      this.setState({
        displayFront: true,
        currentIndex: this.state.currentIndex - 1,
      });
    }
  };

  flipCard = () => this.setState({ displayFront: !this.state.displayFront });

  render() {
    const card = this.props.cards[this.state.currentIndex][
      this.state.displayFront ? 'front' : 'back'
    ];

    return (
      <div>
        <h2>Card Viewer</h2>
        Card {this.state.currentIndex + 1} out of {this.props.cards.length}.
        <div className="card" onClick={this.flipCard}>
          {card}
        </div>
        <br />
        <button
          disabled={this.state.currentIndex === 0}
          onClick={this.prevCard}
        >
          Previous card
        </button>
        <button
          disabled={this.state.currentIndex === this.props.cards.length - 1}
          onClick={this.nextCard}
        >
          Next card
        </button>
        <hr />
        <Link to="/editor">Go to card editor</Link>
      </div>
    );
  }
}

export default CardViewer;