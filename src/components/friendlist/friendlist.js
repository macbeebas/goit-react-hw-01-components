import css from './friendlist.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  const friendItemList = friends.map(friend => (
    <li className={css.item}>
      {friend.isOnline ? (
        <span className={css.status}></span>
      ) : (
        <span className={clsx(css.status, css.status_isOnline)}></span>
      )}
      <img
        className={css.avatar}
        src={friend.avatar}
        alt={'User ' + friend.name}
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  ));
  return (
    <div className={css.friendlist_main}>
      <ul className={css.friendlist_list}>{friendItemList}</ul>
    </div>
  );
}

// propTypes
FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
