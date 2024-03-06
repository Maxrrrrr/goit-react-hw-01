import css from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.FriendListItem}>
          <img className={css.friendAvatar} src={avatar} alt="Avatar" width="48" />
          <p className={css.friendName}>{name}Friend name</p>
          <p className={css.friendStatus}>{isOnline}Friend status</p>
</div>
  );
};

export default FriendListItem;