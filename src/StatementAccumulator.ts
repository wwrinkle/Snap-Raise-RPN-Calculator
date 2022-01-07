import {FormattedInput} from './CliInterpreter';
import {Operators} from './settings';

export type RpnStatement = {
  operands: number[];
  operators: Operators[];
};
export default class SatementAccumulator {
  private static accumulator: RpnStatement = {
    operands: [],
    operators: [],
  };
  static receiveInput(input: FormattedInput): RpnStatement | undefined {
    for (const inputItem of input) {
      console.log(inputItem, typeof inputItem);
      if (typeof inputItem === 'number') {
        this.accumulator.operands.push(inputItem);
      } else {
        this.accumulator.operators.push(inputItem);
      }
    }

    if (this.accumulatorIsReadyForCalculation()) {
      return this.accumulator;
    }
    return;
  }

  static clearAccumulator(): void {
    this.accumulator = {
      operators: [],
      operands: [],
    };
  }

  private static accumulatorIsReadyForCalculation(): boolean {
    console.log(
      this.accumulator,
      this.accumulator.operators.length > 0 &&
        this.accumulator.operands.length > 0 &&
        this.accumulator.operators.length ===
          this.accumulator.operands.length - 1
    );
    return (
      this.accumulator.operators.length > 0 &&
      this.accumulator.operands.length > 0 &&
      this.accumulator.operators.length === this.accumulator.operands.length - 1
    );
  }
}
