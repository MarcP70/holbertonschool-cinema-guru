import React from 'react';
import PropTypes from 'prop-types';
import './components.css';

function Activity({ activity }) {
  const { user, activityType, title, updatedAt } = activity;

  // Determine the action text based on activityType
   const actionText1 = activityType === 'favorite' ? 'added' :
                     activityType === 'watchLater' ? 'added' :
                     activityType === 'removeFavorited' ? 'removed' :
                     activityType === 'removeWatchLater' ? 'removed' :
                     '';

  const actionText2 = activityType === 'favorite' ? 'to favorites' :
                     activityType === 'watchLater' ? 'to watch later' :
                     activityType === 'removeFavorited' ? 'from favorities' :
                     activityType === 'removeWatchLater' ? 'from watch later' :
                     '';

  return (
    <li>
      <p>
        <span className="username">{user.username} </span>
        <span className="action-text1">{actionText1} </span>
        <span className="title">{title.title} </span>
        <span className="action-text2">{actionText2} </span>
        <span className="separator">- </span>
        <span className="date">{new Date(updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </p>
    </li>
  );
}

Activity.propTypes = {
  activity: PropTypes.shape({
    title: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
    updatedAt: PropTypes.string.isRequired,
    activityType: PropTypes.string.isRequired,
  }).isRequired,
};

export default Activity;
