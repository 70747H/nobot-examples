const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

const ZLIB_BEST_COMPRESSION = 9;
// Create a file to stream archive data to.
const zlipPath = path.join(__dirname, 'files.zip');
const output = fs.createWriteStream(zlipPath);
const archive = archiver('zip', {
    zlib: {level: ZLIB_BEST_COMPRESSION}
});

// Listen for all archive data to be written
output.on('close', () => {
    console.log(`Total bytes: ${archive.pointer()}`);
    console.log(`archiving is now finished.`);
});

archive.on('error', (err) => {
    throw err;
});

archive.pipe(output);

// Add files (read the copy.txt and the logo.jpg and output with different names)
const textPath = path.join(__dirname, 'copy.txt');
const logoPath = path.join(__dirname, 'logo.jpg');
archive.append(fs.createReadStream(textPath), {name: 'content.txt'});
archive.append(fs.createReadStream(logoPath), {name: 'nobot.jpg'});

// Finalize the archive (ie we are done appeanding files but streams have to finish yet)
archive.finalize();