class Calculator {
  static optimalPath(numberArray) {
    const path = [];
    const index = [];
    if (numberArray.length === 0 || numberArray[0] <= 0) {
      return false;
    }
    if (numberArray.length - 1 <= numberArray[0]) {
      return [0, numberArray.length - 1];
    }
    // eslint-disable-next-line prefer-destructuring
    path[0] = numberArray[0];
    index[0] = 0;

    for (let i = 0; i < numberArray.length;) {
      let temp = 0;
      let j = i + 1;
      let tempIndex = 0;
      for (j; j <= i + path[path.length - 1]; j += 1) {
        if (temp < numberArray[j]) {
          temp = numberArray[j];
          tempIndex = j;
        }
      }
      if (temp < 1) {
        return false;
      }
      path.push(temp);
      index.push(tempIndex);
      i = tempIndex;
      if (numberArray.length - 1 <= path[path.length - 1] + tempIndex) {
        path.push(numberArray[numberArray.length - 1]);
        index.push(numberArray.length - 1);
        break;
      }
    }
    return index;
  }

  static parseInput(input) {
    const expression = /-?[0-9]+/g;
    const numberArray = input.match(expression);
    const result = [];
    try {
      if (numberArray !== null) {
        numberArray.forEach((item) => {
          result.push(parseInt(item, 10));
        });
        return result;
      }
      return null;
    } catch (e) {
      return null;
    }
  }
}

export default Calculator;
