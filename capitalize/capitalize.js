function capitalize(name) {
    if (typeof name !== 'string') return '';
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
};

module.exports = capitalize;