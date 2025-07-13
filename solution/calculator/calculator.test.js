const calculator = require('./calculator.js');

describe('function add', () => {
    test('Normal input', () => {
        expect(calculator.add(2, 2)).toBe(4);
    });

    test('Entering a floating point number', () => {
        expect(calculator.add(2.2, 2.6)).toBe(4.8);
    });

    test('Input with negative numbers', () => {
        expect(calculator.add(-2, -14)).toBe(-16);
    });

    test('Entering numbers as a string', () => {
        expect(calculator.add('6', '4')).toBe(10);
    });

    test('Non numeric input', () => {
        expect(() => calculator.add('2', 'DD')).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Empty string input', () => {
        expect(() => calculator.add('', '')).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('One argument only', () => {
        expect(() => calculator.add(5)).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Null input', () => {
        expect(() => calculator.add(null, null)).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Boolean input', () => {
        expect(() => calculator.add(true, false)).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Array input', () => {
        expect(() => calculator.add([1], [2])).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Object input', () => {
        expect(() => calculator.add({}, {})).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Very large numbers', () => {
        expect(calculator.add(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
    });
});

describe('function subtract', () => {
    test('Normal input', () => {
        expect(calculator.subtract(2, 2)).toBe(0);
    });

    test('Entering a floating point number', () => {
        expect(calculator.subtract(2.2, 2.6)).toBe(-0.4);
    });

    test('Input with negative numbers', () => {
        expect(calculator.subtract(-2, -14)).toBe(12);
    });

    test('Entering numbers as a string', () => {
        expect(calculator.subtract('6', '4')).toBe(2);
    });

    test('Non numeric input', () => {
        expect(() => calculator.subtract('2', 'DD')).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Empty string input', () => {
        expect(() => calculator.subtract('', '')).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('One argument only', () => {
        expect(() => calculator.subtract(5)).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Null input', () => {
        expect(() => calculator.subtract(null, null)).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Boolean input', () => {
        expect(() => calculator.subtract(true, false)).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Array input', () => {
        expect(() => calculator.subtract([1], [2])).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Object input', () => {
        expect(() => calculator.subtract({}, {})).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Very large numbers', () => {
        expect(calculator.subtract(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER - 1);
    });
});

describe('function divide', () => {
    test('Normal input', () => {
        expect(calculator.divide(2, 2)).toBe(1);
    });

    test('Entering a floating point number', () => {
        expect(calculator.divide(2.2, 2.6)).toBe(0.8);
    });

    test('Input with negative numbers', () => {
        expect(calculator.divide(-2, -14)).toBe(0.1);
    });

    test('Entering numbers as a string', () => {
        expect(calculator.divide('6', '4')).toBe(1.5);
    });

    test('Non numeric input', () => {
        expect(() => calculator.divide('2', 'DD')).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Empty string input', () => {
        expect(() => calculator.divide('', '')).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('One argument only', () => {
        expect(() => calculator.divide(5)).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Null input', () => {
        expect(() => calculator.divide(null, null)).toThrow('Variable values are not allowed, variables must be numeric.');
    });
    test('Boolean input', () => {
        expect(() => calculator.divide(true, false)).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Array input', () => {
        expect(() => calculator.divide([1], [2])).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Object input', () => {
        expect(() => calculator.divide({}, {})).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Divide by zero', () => {
        expect(calculator.divide(5, 0)).toBe(Infinity);
    });
});

describe('function multiply', () => {
    test('Normal input', () => {
        expect(calculator.multiply(2, 2)).toBe(4);
    });

    test('Entering a floating point number', () => {
        expect(calculator.multiply(2.2, 2.6)).toBe(5.7);
    });

    test('Input with negative numbers', () => {
        expect(calculator.multiply(-2, -14)).toBe(28);
    });

    test('Entering numbers as a string', () => {
        expect(calculator.multiply('6', '4')).toBe(24);
    });

    test('Non numeric input', () => {
        expect(() => calculator.multiply('2', 'DD')).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Empty string input', () => {
        expect(() => calculator.multiply('', '')).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('One argument only', () => {
        expect(() => calculator.multiply(5)).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Null input', () => {
        expect(() => calculator.multiply(null, null)).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Boolean input', () => {
        expect(() => calculator.multiply(true, false)).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Array input', () => {
        expect(() => calculator.multiply([1], [2])).toThrow('Variable values are not allowed, variables must be numeric.');
    });

    test('Object input', () => {
        expect(() => calculator.multiply({}, {})).toThrow('Variable values are not allowed, variables must be numeric.');
    });
});
