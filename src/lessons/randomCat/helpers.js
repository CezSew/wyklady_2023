const getCat = () => {
    const payload = fetch('https://api.thecatapi.com/v1/images/search').then(data => data.json()).catch(e => console.log(e));

    return payload;
};

export default getCat;
