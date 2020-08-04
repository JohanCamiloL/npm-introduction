const coolImages = require('cool-images');
const moment = require('moment');
const fs = require('fs');
const { resolve } = require('path');

const randomImage = coolImages.one();

/**
 * Writes data on file
 * @param {String} fileName File name where data will be append. 
 * @param {String} data Data to be written on file.
 */
const writeOnFile = (data, fileName = 'log.txt') => {
    return new Promise((resolve, reject) => {
        fs.appendFile(fileName, data, (error) => {
            if (error) {
                console.log('Hubo un error en la escritura');
                reject();
            } else {
                console.log('Información guardada correctamente');
                resolve();
            }
        });
    });
}

/**
 * Get ten images from cool-images module.
 */
const getTenRandomImages = async () => {
    const tenImages = coolImages.many(100, 200, 10);
    const today = moment().format('YYYY/MM/DD hh:mm:ss');

    await writeOnFile(today + '\n');

    tenImages.forEach(async imageUrl => await writeOnFile(imageUrl + '\n'));

    await writeOnFile('----------------------------------------\n');
}

getTenRandomImages();