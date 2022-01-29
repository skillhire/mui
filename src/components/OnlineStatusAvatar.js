import React from 'react'
import OnlineStatusBadge from './OnlineStatusBadge'
import UserAvatar from './UserAvatar'

const OnlineStatusAvatar = ({
	user,
	size,
	online = 'true',
}) => {
	return (
		<OnlineStatusBadge online={online}>
			<UserAvatar src={user.avatar} size={size} />
		</OnlineStatusBadge>
	)
}

export default OnlineStatusAvatar
