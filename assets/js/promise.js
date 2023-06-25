import { default as axios } from 'axios';

const func = async () => {
    try {
        const photos = await axios.get(
            'https://jsonplaceholder.typicode.com/photos'
        )
        return photos.data;
    } catch (error) {
        console.log(error);
    };
};
 
console.log('object :>> ', func());

function renderPhotos() {
    const photos = func();
    console.log('photos :>> ', photos[0]);
}

console.log('object :>> ', renderPhotos());