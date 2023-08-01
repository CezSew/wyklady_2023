const getSomeCatImage = async () => {
    const payload = await fetch('https://api.thecatapi.com/v1/images/search').then(data => data.json()).catch(e => console.log(e));
    const { url } = payload[0];

    return url;
};

export default getSomeCatImage;
