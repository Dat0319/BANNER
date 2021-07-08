let path = './BANNER/',
    fileSavePath = 'readme.md',
    images = '',
    imageLink = (link, name) => {
        return `<img src="${link}" alt="${name}">`;
    };

const fs = require('fs');

fs.readdir(path, (err, files) => {
    files.forEach((file) => {
        const link = path + file;
        images = images + imageLink(link, file);
    });
    console.log('images', images);
});

fs.writeFile(fileSavePath, `images`, 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    console.log('The file was saved!', data);
});