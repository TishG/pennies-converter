import React from "react";

class Data extends React.Component {
  state = {
    penniesInput: 0,
    dollars: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };
  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleInputSubmit = (e) => {
    e.preventDefault();
    this.penniesConvert(this.state.penniesInput);
  };
  penniesConvert = (pennies) => {
    const dollars = Math.floor(pennies / 100);
    this.setState({ dollars });
    let num = pennies % 100;
    const quarters = Math.floor(num / 25);
    this.setState({ quarters });
    num = num % 25;
    const dimes = Math.floor(num / 10);
    this.setState({ dimes });
    num = num % 10;
    const nickels = Math.floor(num / 5);
    this.setState({ nickels });
    num = num % 5;
    const returnPennies = num / 1;
    this.setState({ pennies: returnPennies });
    // return `${dollars} dollars, ${quarters} quarters, ${dimes} dimes, ${nickels} nickels ${returnPennies} pennies.`;
  };
  render() {
    return (
      <div id="data-container">
          <form onSubmit={this.handleInputSubmit}>
            <label htmlFor="penniesInput">Pennies Input: </label>
            <input
              id="penniesInput"
              type="number"
              value={this.state.penniesInput}
              onChange={this.handleInputChange}
            />
            <button>Submit</button>
          </form>
        <div id="results-container">
        <label>
          Dollars:
          <input type="text" value={this.state.dollars} />
        </label>
        <label>
          Quarters:
          <input type="text" value={this.state.quarters} />
        </label>
        <label>
          Dimes:
          <input type="text" value={this.state.dimes} />
        </label>
        <label>
          Nickels:
          <input type="text" value={this.state.nickels} />
        </label>
        <label>
          Pennies:
          <input type="text" value={this.state.pennies} />
        </label>
        </div>
      </div>
    );
  }
}

export default Data;
