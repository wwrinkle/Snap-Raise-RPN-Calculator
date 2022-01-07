import {endOfInputCommand, Operators, operators} from './settings';

export type FormattedInput = (number | Operators)[];

export default class CliInterpreter {
  static receiveInput(input: string): FormattedInput {
    input = input.toLowerCase();
    if (input.includes(endOfInputCommand)) {
      console.log('goodbye');
      process.exit(0);
    }
    // thow error if characters are invalid
    this.checkForInvalidCharacters(input);
    return this.formatInput(input);
  }

  private static formatInput(input: string): FormattedInput {
    // replace x (multiplcation) with *
    input = input.replace(/x/g, '*');
    // split on digits (grouped), whitespaces (grouped) and non-digist (not grouped)
    const splitInput = input.match(/[\d]+|\s+|\D/g)!;
    // remove spaces
    const filteredInput = splitInput.filter(inputItem => inputItem !== ' ');
    return filteredInput.map((inputItem: string) => {
      inputItem = inputItem.trim();
      if (Object.keys(operators).includes(inputItem)) {
        return inputItem;
      } else {
        return parseInt(inputItem);
      }
    }) as FormattedInput;
  }

  private static checkForInvalidCharacters(input: string): void {
    if (
      !input.split('').every((char: string) => {
        return (
          Object.keys(operators).includes(char) ||
          !isNaN(parseInt(char)) ||
          char === ' '
        );
      })
    ) {
      throw new Error(`${input} contains invalid characters`);
    }
  }
}
