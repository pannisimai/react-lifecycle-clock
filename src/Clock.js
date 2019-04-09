import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), color: null };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  ChangeColor() {
    let newColor =
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")";
    return newColor;
  }

  tick() {
    this.setState({
      date: new Date(),
      color: this.ChangeColor()
    });
  }

  render() {
    return (
      <div style={{ color: this.state.color }}>
        <h1>
          <span class="letters">
            <span>H</span>
            <span>e</span>
            <span>l</span>
            <span>l</span>
            <span>o</span>
            <span />
            <span>W</span>
            <span>o</span>
            <span>r</span>
            <span>l</span>
            <span>d</span>
          </span>
        </h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
