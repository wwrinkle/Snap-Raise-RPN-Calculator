# Snap-Raise-RPN-Calculator

This is a simple RPN calculator. It accepts the operators `+`, `-`, `*` (or `x`) and `/`. It will accept input line-by-line or in one line. The result of the last calculation is transferred as the initial operand of the next calculation.

The command `q` exits the program.

## Reasoning

I chose typescript because if its self-documenting characteristics.

I split the logic into classes that use static methods.

- CliInterpreter
  - takes the raw input
  - determines if the `q` command is present
    - if so the program exits
  - formats the string into an array of operators and operands
- StatementAccumulator
  - takes the formatted array
  - separates the operators and operands
  - determines if statement is complete
    - there are operators and operands present
    - there are 1 few operands than operators
  - if statement is complete it returns the accumulator
- Calculator
  - takes a complete statement
  - performs calculations
  - returns the result
  - modifies the accumulator with the result

## Setup 
First it must be compiled.

`npm run compile`

## Use

`npm run start`

## What I left out
This repo contains no tests (and is therefor "broken by design").
