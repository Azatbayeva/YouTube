import {
	Avatar,
	Card,
	CardContent,
	CardMedia,
	Stack,
	Typography,
} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { colors } from '../../constants/colors'
import moment from 'moment'
import { Link } from 'react-router-dom'

const VideoCard = ({ video }) => {
	const videoId = video?.id?.videoId || video?.id
	const {
		title = '',
		description = '',
		thumbnails,
		channelTitle,
		publishedAt,
	} = video?.snippet || {}

	return (
		<Card
			sx={{
				width: { xs: '100%', sm: '350px', md: '320px' },
				boxShadow: 'none',
				borderRadius: 0,
			}}
		>
			<Link to={`/video/${videoId}`}>
				<CardMedia
					image={thumbnails?.high?.url}
					alt={title}
					sx={{
						width: { xs: '100%', sm: '360px', md: '320px' },
						height: '180px',
					}}
				/>
			</Link>

			<CardContent
				sx={{
					background: colors.primary,
					height: '200px',
					position: 'relative',
				}}
			>
				<Link to={`/video/${videoId}`} style={{ textDecoration: 'none', color: 'white' }}>
					<Typography my={'5px'} sx={{ opacity: 0.4 }}>
						{moment(publishedAt).fromNow()}
					</Typography>

					<Typography variant='subtitle1' fontWeight='bold'>
						{title.slice(0, 50)}
					</Typography>

					<Typography variant='subtitle2' sx={{ opacity: 0.6 }}>
						{description.slice(0, 70)}
					</Typography>
				</Link>

				<Stack
					direction={'row'}
					position={'absolute'}
					bottom={'10px'}
					alignItems={'center'}
					gap={2}
				>
					<Avatar src={thumbnails?.high?.url} />
					<Typography variant='subtitle2' color='gray'>
						{channelTitle}
					</Typography>
					<CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
				</Stack>
			</CardContent>
		</Card>
	)
}

export default VideoCard
