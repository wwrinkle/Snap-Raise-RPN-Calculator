import * as readline from 'readline';
import {stdin as input, stdout as output} from 'process';
import CliInterpreter from './CliInterpreter';
import SatementAccumulator from './StatementAccumulator';
import Calculator from './Calculator';

const lineReader = readline.createInterface({input, output});

lineReader.on('line', (input: string) => {
  console.log(input);
  try {
    const formattedInput = CliInterpreter.receiveInput(input);
    const statement = SatementAccumulator.receiveInput(formattedInput);
    if (statement !== undefined) {
      const result = Calculator.calculate(statement);
      console.log(result);
    }
  } catch (e) {
    console.error((e as Error).message);
    SatementAccumulator.clearAccumulator();
  }
});
