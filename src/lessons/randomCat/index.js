import getSomeCatImage from './helpers';
import { useState } from 'react';
import './index.css';

const GetCat = () => {
    const [image, setImage] = useState('');

    const displayRandomCat = async () => {
      const randomCatImage = await getSomeCatImage();
      setImage(randomCatImage);
    };

    return (
      <div className={`cat-container`}>
        <button onClick={displayRandomCat} className={`cat-button`}>
            {`Get random cat pic!`}
        </button>
        <img alt={''} src={image} />
      </div>
    );
}

export default GetCat;