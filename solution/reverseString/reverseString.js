function reverseString(str) {
    if (
        str === undefined ||
        str === null ||
        typeof str === 'object' ||
        Array.isArray(str)
    ) throw Error('Inappropriate data type');

    return Array.from(String(str)).reverse().join('');
};

module.exports = reverseString;
