const analyzeArray = require('./analyzeArray.js');

test('Normal input', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test('Empty array', () => {
    expect(analyzeArray([])).toStrictEqual({ average: undefined, min: undefined, max: undefined, length: 0 });
});

test('Single element', () => {
    expect(analyzeArray([5])).toStrictEqual({ average: 5, min: 5, max: 5, length: 1 });
});

test('Negative numbers', () => {
    expect(analyzeArray([-5, -10, -3])).toStrictEqual({ average: -6, min: -10, max: -3, length: 3 });
});

test('All same numbers', () => {
    expect(analyzeArray([7, 7, 7, 7])).toStrictEqual({ average: 7, min: 7, max: 7, length: 4 });
});

test('Floating point numbers', () => {
    expect(analyzeArray([1.5, 2.5, 3.5])).toStrictEqual({ average: 2.5, min: 1.5, max: 3.5, length: 3 });
});

test('Invalid input (not array)', () => {
    expect(() => analyzeArray('not an array')).toThrow();
});
