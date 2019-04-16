import React, {Component} from 'react';
import logo from './images/logo.svg';

class App extends Component {
  async componentDidMount() {
    // Retrieve publishable key from config endpoint.
    this.config = await fetch(`/config`).then(r => r.json());
  }

  render() {
    return (
      <div className="app">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <div className="product-image" />
        <main>
          <h1>Stubborn Attachments</h1>
          <p className="subtitle">Tyler Cowen</p>
          <p>
            If we want to continue on our trends of growth, and the
            overwhelmingly positive outcomes for societies that come with it,
            every individual must become more concerned with the welfare of
            those around us—and in the world at large and most of all our
            descendants in the future. So, how do we proceed? Cowen, in a
            culmination of 20 years of thinking and research, provides a roadmap
            for moving forward.
            <em>
              Stubborn Attachments: A Vision for a Society of Free, Prosperous,
              and Responsible Individuals
            </em>
            argues that our reason and common sense can help free us of the
            faulty ideas that hold us back as people and as a society. Cowen’s
            latest book, at its heart, makes the contemporary moral case for
            economic growth and in doing so engenders a great dose of
            inspiration and optimism about our future possibilities.
          </p>
          <div className="summary">
            <div className="price">$20</div>
            <button className="pre-order">Pre-order</button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
