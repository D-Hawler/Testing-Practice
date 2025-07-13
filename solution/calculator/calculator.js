const calculator = { add, subtract, divide, multiply };

function add(numX, numY) {
    if (
        numX === '' || numY === '' ||
        numX === undefined || numY === undefined ||
        numX === null || numY === null ||
        isNaN(Number(numX)) || isNaN(Number(numY)) ||
        Array.isArray(numX) || Array.isArray(numY) ||
        typeof numX === 'boolean' || typeof numY === 'boolean'
    ) throw Error('Variable values are not allowed, variables must be numeric.');

    return Math.round((Number(numX) + Number(numY)) * 10) / 10;
};

function subtract(numX, numY) {
    if (
        numX === '' || numY === '' ||
        numX === undefined || numY === undefined ||
        numX === null || numY === null ||
        isNaN(Number(numX)) || isNaN(Number(numY)) ||
        Array.isArray(numX) || Array.isArray(numY) ||
        typeof numX === 'boolean' || typeof numY === 'boolean'
    ) throw Error('Variable values are not allowed, variables must be numeric.');

    return Math.round((Number(numX) - Number(numY)) * 10) / 10;
};

function divide(numX, numY) {
    if (
        numX === '' || numY === '' ||
        numX === undefined || numY === undefined ||
        numX === null || numY === null ||
        isNaN(Number(numX)) || isNaN(Number(numY)) ||
        Array.isArray(numX) || Array.isArray(numY) ||
        typeof numX === 'boolean' || typeof numY === 'boolean'
    ) throw Error('Variable values are not allowed, variables must be numeric.');

    return Math.round((Number(numX) / Number(numY)) * 10) / 10;
};

function multiply(numX, numY) {
    if (
        numX === '' || numY === '' ||
        numX === undefined || numY === undefined ||
        numX === null || numY === null ||
        isNaN(Number(numX)) || isNaN(Number(numY)) ||
        Array.isArray(numX) || Array.isArray(numY) ||
        typeof numX === 'boolean' || typeof numY === 'boolean'
    ) throw Error('Variable values are not allowed, variables must be numeric.');

    return Math.round((Number(numX) * Number(numY)) * 10) / 10;
};

module.exports = calculator;
