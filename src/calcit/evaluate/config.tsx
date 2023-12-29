const symbols: any = {
  '^': { infix: '_POW' },
  '\u00D7': { infix: '_MUL' },
  ':': { infix: '_DIV' },
  '%': { infix: '_MOD' },
  '+': { infix: '_ADD', prefix: '_POS' },
  '-': { infix: '_SUB', prefix: '_NEG' },
}

const factorial: any = (x: any) => (x >= 0) ? ((x < 2) ? 1 : x * factorial(x - 1)) : NaN

const operators: any = {
  '_POW': { name: 'Power', precedence: 4, associativity: 'right', method: (x: any, y: any) => x ** y },
  '_POS': { name: 'Positive', precedence: 3, associativity: 'right', method: (x: any) => x },
  '_NEG': { name: 'Negative', precedence: 3, associativity: 'right', method: (x: any) => -x },
  '_MUL': { name: 'Multiply', precedence: 2, associativity: 'left', method: (x: any, y: any) => x * y },
  '_DIV': { name: 'Divide', precedence: 2, associativity: 'left', method: (x: any, y: any) => x / y },
  '_MOD': { name: 'Modulo', precedence: 2, associativity: 'left', method: (x: any, y: any) => x % y },
  '_ADD': { name: 'Add', precedence: 1, associativity: 'left', method: (x: any, y: any) => x + y },
  '_SUB': { name: 'Subtract', precedence: 1, associativity: 'left', method: (x: any, y: any) => x - y },
}

const constants: any = {
  'E': Math.E,
  'LN2': Math.LN2,
  'LN10': Math.LN10,
  'LOG2E': Math.LOG2E,
  'LOG10E': Math.LOG10E,
  'PHI': (1 + Math.sqrt(5)) / 2,
  'PI': Math.PI,
  'SQRT1_2': Math.SQRT1_2,
  'SQRT2': Math.SQRT2,
  'TAU': 2 * Math.PI,
}

const methods: any = {
  'ABS': (x: any) => Math.abs(x),
  'ACOS': (x: any) => Math.acos(x),
  'ACOSH': (x: any) => Math.acosh(x),
  'ADD': (x: any, y: any) => x + y,
  'ASIN': (x: any) => Math.asin(x),
  'ASINH': (x: any) => Math.asinh(x),
  'ATAN': (x: any) => Math.atan(x),
  'ATANH': (x: any) => Math.atanh(x),
  'ATAN2': (y: any, x: any) => Math.atan2(y, x),
  'CBRT': (x: any) => Math.cbrt(x),
  'CEIL': (x: any) => Math.ceil(x),
  'COS': (x: any) => Math.cos(x),
  'COSH': (x: any) => Math.cosh(x),
  'DIVIDE': (x: any, y: any) => x / y,
  'EXP': (x: any) => Math.exp(x),
  'EXPM1': (x: any) => Math.expm1(x),
  'FACTORIAL': factorial,
  'FLOOR': (x: any) => Math.floor(x),
  'HYPOT': (...args: any) => Math.hypot(...args),
  'LOG': (x: any) => Math.log(x),
  'LOG1P': (x: any) => Math.log1p(x),
  'LOG10': (x: any) => Math.log10(x),
  'LOG2': (x: any) => Math.log2(x),
  'MAX': (...args: any) => Math.max(...args),
  'MEAN': (...args: any) => [...args].reduce((sum, x) => {
    return sum + x
  }, 0) / [...args].length,
  'MIN': (...args: any) => Math.min(...args),
  'MOD': (x: any, y: any) => x % y,
  'MULTIPLY': (x: any, y: any) => x * y,
  'POW': (x: any, y: any) => x ** y,
  'SIN': (x: any) => Math.sin(x),
  'SINH': (x: any) => Math.sinh(x),
  'SQRT': (x: any) => Math.sqrt(x),
  'SUBTRACT': (x: any, y: any) => x - y,
  'SUM': (...args: any) => [...args].reduce((sum, x) => {
    sum += x
    return sum
  }, 0),
  'TAN': (x: any) => Math.tan(x),
  'TANH': (x: any) => Math.tanh(x),
}

export { symbols, operators, constants, methods }