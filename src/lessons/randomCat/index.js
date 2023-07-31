import getCat from './helpers';
import { useState } from 'react';
import './index.css';

const GetCat = () => {
    const [image, setImage] = useState('');

    const displayRandomCat = () => {
      getCat().then(data => {
          setImage(data[0].url);
      })
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