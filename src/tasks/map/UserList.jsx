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
            <div className={`code-box`}>
                <p>{`- w komponencie ‘UserList’ zwróć listę loginów użytkowników userList jako komponenty ‘ListItem’`}</p>
                <p>{`- wykorzystaj metodę .map()`}</p>
                <p>{`- użyj id pojedynczego użytkownika jako atrybutu key`}</p>
                <p>{`- uruchom testy ‘npm run test UserList.jsx’`}</p>
            </div>
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
