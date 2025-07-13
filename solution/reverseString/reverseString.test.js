const reverseString = require('./reverseString.js');

test('Inappropriate data type', () => {
    expect(() => reverseString(undefined)).toThrow('Inappropriate data type');
    expect(() => reverseString(null)).toThrow('Inappropriate data type');
    expect(() => reverseString({key: 22, lock: 22})).toThrow('Inappropriate data type');
    expect(() => reverseString([0, 1, 2, 3, 4])).toThrow('Inappropriate data type');
});

test('Normal input', () => {
    expect(reverseString('Hello World')).toBe('dlroW olleH');
});

test('Number input', () => {
    expect(reverseString(12213)).toBe('31221');
});

test('Blank line', () => {
    expect(reverseString('')).toBe('');
});

test('Call without argument', () => {
    expect(() => reverseString()).toThrow();
});

test('String with leading and trailing spaces', () => {
    expect(reverseString('  hello  ')).toBe('  olleh  ');
});

test('Single character', () => {
    expect(reverseString('a')).toBe('a');
});

test('Unicode and emoji', () => {
    expect(reverseString('😀👍')).toBe('👍😀');
    expect(reverseString('тест')).toBe('тсет');
});

test('Mixed case', () => {
    expect(reverseString('AbC')).toBe('CbA');
});

test('Alphanumeric', () => {
    expect(reverseString('abc123')).toBe('321cba');
});

test('Very long string', () => {
    expect(reverseString('a'.repeat(1000))).toBe('a'.repeat(1000));
});

test('String with newline', () => {
    expect(reverseString('ab\ncd')).toBe('dc\nba');
});

test('Original string is not mutated', () => {
    const str = 'test';
    reverseString(str);
    expect(str).toBe('test');
});