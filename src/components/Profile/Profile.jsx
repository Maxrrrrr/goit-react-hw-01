import css from './Profile.module.css'

export const Profile = ({name, tag, location, image, stats}) => {
  return (
<div className={css.profileContainer}>
  <div>
    <img className={css.profileAvatar}
      src={image}
      alt="User avatar"
    />
    <p className={css.profileName}>{name}</p>
    <p className={css.profileTag}>{tag}</p>
    <p className={css.profileLocation}>{location}</p>
  </div>

  <ul className={css.profileList}>
    <li className={css.profileListItem}>
      <span className={css.profileTitle}>Followers</span>
      <span className={css.profileStats}>{stats.followers}</span>
    </li>
    <li className={css.profileListItem}> 
      <span className={css.profileTitle}>Views</span>
      <span className={css.profileStats}>{stats.views}</span>
    </li>
    <li className={css.profileListItem}>
      <span className={css.profileTitle}>Likes</span>
      <span className={css.profileStats}>{stats.likes}</span>
    </li>
  </ul>
</div>
)
}
