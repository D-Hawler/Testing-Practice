const capitalize = require('./capitalize.js');

test('All text is in lower case', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});

test('All text is in uppercase', () => {
    expect(capitalize('DANTE')).toBe('Dante');
});

test('Blank line', () => {
    expect(capitalize('')).toBe('');
});

test('Starts with a number', () => {
    expect(capitalize('2DAaN')).toBe('2daan');
});

test('A name with numbers', () => {
    expect(capitalize('da2an')).toBe('Da2an');
});

test('Single lowercase letter', () => {
    expect(capitalize('a')).toBe('A');
});

test('Single uppercase letter', () => {
    expect(capitalize('A')).toBe('A');
});

test('String with leading/trailing spaces', () => {
    expect(capitalize('  hello')).toBe('  hello');
    expect(capitalize('hello  ')).toBe('Hello  ');
});

test('Null or undefined input', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
});

test('Non-string input', () => {
    expect(capitalize(123)).toBe('');
    expect(capitalize({})).toBe('');
});