import css from "./Profile.module.css";

  export const Profile = ({
    username,
    tag,
    location,
    avatar, 
    stats
}) => (
   <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
      width='90'
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div> 
)