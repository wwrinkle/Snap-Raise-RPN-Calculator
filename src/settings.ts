export const operators = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  '*': (a: number, b: number) => a * b,
  '/': (a: number, b: number) => a / b,
} as const;
export type Operators = keyof typeof operators;
export const endOfInputCommand = 'q' as const;
