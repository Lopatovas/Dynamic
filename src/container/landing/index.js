/* eslint-disable react/no-array-index-key */
import React from 'react';
import Calculator from '../../logic/calculate';
import TextArea from '../../component/TextArea';
import Button from '../../component/Button';
import './style.css';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '', error: null, optimalPath: null, parsedArray: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleClick() {
    const { input } = this.state;
    const parsedArray = Calculator.parseInput(input);
    if (parsedArray === null || parsedArray === undefined) {
      this.setState({ error: 'Provided input was invalid, please provide a valid list of numbers.', optimalPath: null, parsedArray: null });
    } else {
      const optimalPath = Calculator.optimalPath(parsedArray);
      if (!optimalPath) {
        this.setState({ error: 'The provided array has no possible paths to reach the end.', optimalPath: null, parsedArray: null });
      } else {
        this.setState({ error: null, optimalPath, parsedArray });
      }
    }
  }

  handleInput(value) {
    this.setState({ input: value });
  }

  filterPath() {
    const { parsedArray, optimalPath } = this.state;
    const calcArray = [...optimalPath];
    console.log(calcArray);
    return parsedArray.map((item, i) => {
      if (i !== calcArray[0]) {
        return (
          <span key={i}>
            {`${item} `}
          </span>
        );
      }
      calcArray.shift();
      return (
        <span key={i} className="successText">
          {`${item} `}
        </span>
      );
    });
  }

  render() {
    const {
      error, optimalPath,
    } = this.state;
    return (
      <div className="page">
        <div className="container">
          <TextArea handleChange={this.handleInput} />
          <Button Text="Calculate" handleClick={this.handleClick} />
          {error ? <p className="errorText">{error}</p> : null}
          {optimalPath ? (
            <div>
              <p className="successText">Success!</p>
              <p>The optimal path is marked in green:</p>
              {this.filterPath()}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Landing;
