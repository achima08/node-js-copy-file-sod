var fs = require('fs');

// Membaca file lama
var streamFile = fs.createReadStream('file_lama.txt');
var streamFileBaru = fs.createWriteStream('file_lama_cpy.txt');

var buffers = [];


streamFile.on('data', function (buffer) {
    streamFileBaru.write(buffer);
});
