function caesarCipher(str, shift) {
    if (
        typeof str !== 'string' ||
        typeof shift !== 'number'
    ) throw Error('Entering an invalid format');

    return str.split('').map((char) => {
        if (char >= 'A' && char <= 'Z') {
            let code = ((char.charCodeAt(0) - 65 + shift) % 26 + 26) % 26;
            return String.fromCharCode(code + 65);
        };

        if (char >= 'a' && char <= 'z') {
            let code = ((char.charCodeAt(0) - 97 + shift) % 26 + 26) % 26;
            return String.fromCharCode(code + 97);
        };

        return char;
    }).join('');
};

module.exports = caesarCipher;
