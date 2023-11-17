import { useState } from 'react';

const ListItem = ({ user, removeUser }) => {
    const [points, setPoints] = useState(0);

    return (
        <>
            <li>
                <span className={`text-content`}>
                    {`${user.name} ${points}`}
                </span>
                <br/>
                <button onClick={() => setPoints(points + 1)}>
                    {`+`}
                </button>
            </li>
        <br/>
        </>
    );
}

export default ListItem;
