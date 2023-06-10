const func = async () => {
    try {
        const photos = await fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((json) => console.log(json));
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