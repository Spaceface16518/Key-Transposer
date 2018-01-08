const Write = {}



Write.write = function (text) {
$("#result").text(text);
console.log("Transposed note written: " + text);
};

module.exports = Write;