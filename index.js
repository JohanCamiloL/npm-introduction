const coolImages = require('cool-images');

const randomImage = coolImages.one();

/**
 * Get ten images from cool-images module
 */
const getTenRandomImages = () => {
    const randomImages = coolImages.many(100, 200, 10);

    randomImages.forEach(randomImageURL => console.log(`Image URL: ${randomImageURL}`));
}

getTenRandomImages();