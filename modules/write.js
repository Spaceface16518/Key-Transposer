const Write = {}



Write.write = function (text) {
$("#result").text(text);
console.log("Transposed note written: " + text);
};

Write.testConnection = function () {
  console.log("Write: Connection confirmed");
}

module.exports = Write;