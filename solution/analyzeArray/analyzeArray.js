function analyzeArray(arr) {
    const sort = arr.sort((x, y) => x - y);

    return {
        average: arr.length === 0 ? undefined : arr.reduce((a, b) => a + b, 0) / arr.length,
        min: sort[0],
        max: sort[arr.length - 1],
        length: arr.length,
    };
};

module.exports = analyzeArray;
