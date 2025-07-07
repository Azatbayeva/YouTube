import { Box, Stack } from '@mui/material'
import Loader from '../loader'
import VideoCard from '../video-card'
import ChannelCard from '../chanel-card'

const Videos = ({ videos }) => {
	if (!videos?.length) return <Loader />

	return (
		<Stack
			width='100%'
			direction='row'
			flexWrap='wrap'
			justifyContent='center'
			alignItems='start'
			columnGap={1}
			rowGap={5}
		>
			{videos.map(item => {
				const isVideo = item.id.kind === 'youtube#video'
				const isChannel = item.id.kind === 'youtube#channel'

				return (
					<Box
						key={item.id.videoId || item.id.channelId}
						width={{ xs: '100%', sm: '358px', md: '350px' }}
					>
						{isVideo && <VideoCard video={item} />}
						{isChannel && <ChannelCard video={item} />}
					</Box>
				)
			})}
		</Stack>
	)
}

export default Videos
