const caesarCipher = require('./caesarCipher.js');

test('Normal input', () => {
    expect(caesarCipher('Hello World!!', 5)).toBe('Mjqqt Btwqi!!');
});

test('Numeric input in strings', () => {
    expect(caesarCipher('1234', 6)).toBe('1234');
});

test('Numeric input', () => {
    expect(() => caesarCipher(1234, 2)).toThrow('Entering an invalid format');
});

test('Input of both strings and numbers', () => {
    expect(caesarCipher('Da22an', 10)).toBe('Nk22kx');
});

test('Wrap from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('XYZ', 3)).toBe('ABC');
});

test('Negative shift', () => {
    expect(caesarCipher('abc', -3)).toBe('xyz');
    expect(caesarCipher('ABC', -3)).toBe('XYZ');
});

test('Case preservation', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Punctuation and spaces', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Zero shift', () => {
    expect(caesarCipher('Hello', 0)).toBe('Hello');
});

test('Empty string', () => {
    expect(caesarCipher('', 5)).toBe('');
});

test('Large shift', () => {
    expect(caesarCipher('abc', 29)).toBe('def');
});

test('Invalid shift type', () => {
    expect(() => caesarCipher('abc', 'a')).toThrow('Entering an invalid format');
});

test('Undefined or null input', () => {
    expect(() => caesarCipher(undefined, 2)).toThrow('Entering an invalid format');
    expect(() => caesarCipher('abc', null)).toThrow('Entering an invalid format');
});
