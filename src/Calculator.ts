import {operators} from './settings';
import {RpnStatement} from './StatementAccumulator';

export default class Calculator {
  static calculate(input: RpnStatement): number {
    for (const operator of input.operators) {
      const operands = input.operands.slice(-2) as [number, number];
      const result = operators[operator](...operands);
      input.operands = input.operands.slice(0, -2);
      input.operands.push(result);
    }
    input.operators = [];
    return input.operands[0];
  }
}
