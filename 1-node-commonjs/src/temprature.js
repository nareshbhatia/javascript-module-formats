function c2f(c) {
    return c * 1.8 + 32;
}

function f2c(f) {
    return (f - 32) / 1.8;
}

module.exports = {
    c2f,
    f2c
};
