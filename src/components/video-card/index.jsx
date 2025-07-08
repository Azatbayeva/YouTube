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
		channelId,
	} = video?.snippet || {}

	return (
		<Card
			sx={{
				width: { xs: '100%', sm: '360px', md: '320px' },
				boxShadow: 'none',
				borderRadius: 0,
			}}
		>
			<Link to={`/video/${videoId}`}>
				<CardMedia
					image={thumbnails?.high?.url}
					alt={title}
					sx={{
						width: '100%',
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
				<Link
					to={`/video/${videoId}`}
					style={{ textDecoration: 'none', color: 'white' }}
				>
					<Typography my={'5px'} sx={{ opacity: 0.4 }}>
						{publishedAt ? moment(publishedAt).fromNow() : ''}
					</Typography>

					<Typography variant='subtitle1' fontWeight='bold'>
						{title.length > 50 ? `${title.slice(0, 50)}...` : title}
					</Typography>

					<Typography variant='subtitle2' sx={{ opacity: 0.6 }}>
						{description.length > 70
							? `${description.slice(0, 70)}...`
							: description}
					</Typography>
				</Link>

				<Link to={`/channel/${channelId}`}>
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
				</Link>
			</CardContent>
		</Card>
	)
}

export default VideoCard
