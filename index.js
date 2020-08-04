const coolImages = require('cool-images');
const moment = require('moment');
const fs = require('fs');

const randomImage = coolImages.one();

/**
 * Writes data on file
 * @param {String} fileName File name where data will be append. 
 * @param {String} data Data to be written on file.
 */
const writeOnFile = (data, fileName = 'log.txt') => {
    fs.appendFile(fileName, data, (error) => {
        if (error) console.log('Hubo un error en la escritura');
        else console.log('Información guardada correctamente');
    });
}

/**
 * Get ten images from cool-images module
 */
const getTenRandomImages = () => {
    const randomImages = coolImages.many(100, 200, 10);

    randomImages
        .forEach(randomImageURL => console.log(`Image URL: ${randomImageURL}`));
}