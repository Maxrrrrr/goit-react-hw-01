import './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
    return (
      <ul className={css.friend}>
        {friends.map(friend => (
          <li className={css.items} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
  );
};

export default FriendList;




