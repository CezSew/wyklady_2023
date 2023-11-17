import { useState } from 'react';
import { usersList } from './users';
import ListItem from './ListItem';

const UserList = () => {
    const [users, setUsers] = useState(usersList);

    const sortUsers = () => {
        setUsers([...users.reverse()]);
    };

    return (
        <div>
            <ul>
                {/* tutaj wyrenderować użytkowników z użyciem ListItem */}
            </ul>
            <button className={'sort'} type={'button'} onClick={sortUsers}>
                {`Sortuj`}
            </button>
        </div>
    )
}
//
// const UserList = () => {
//     const [users, setUsers] = useState(usersList);
//
//     const sortUsers = () => {
//         setUsers([...users.reverse()]);
//     };
//
//     return (
//         <div>
//             <ul>
//                 {users.map((user, index) => (
//                     <ListItem
//                         key={user.id}
//                         user={user}
//                     />
//                 ))}
//             </ul>
//             <button className={'sort'} type={'button'} onClick={sortUsers}>
//                 {`Sortuj`}
//             </button>
//         </div>
//     );
// };

export default UserList;
