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

const VideoCard = ({ video }) => {
	const {
		snippet: { title, description, thumbnails, channelTitle, publishedAt },
	} = video

	return (
		<Card
			sx={{
				width: { xs: '100%', sm: '350px', md: '320px' },
				boxShadow: 'none',
				borderRadius: 0,
			}}
		>
			<CardMedia
				image={thumbnails?.high?.url}
				alt={title}
				sx={{
					width: { xs: '100%', sm: '360px', md: '320px' },
					height: '180px',
				}}
			/>
			<CardContent
				sx={{
					background: colors.primary,
					height: '200px',
					position: 'relative',
				}}
			>
				<Typography my={'5px'} sx={{ opacity: 0.4 }}>
					{moment(publishedAt).fromNow()}
				</Typography>

				<Typography variant='subtitle1' fontWeight='bold'>
					{title.slice(0, 50)}
				</Typography>

				<Typography variant='subtitle2' sx={{ opacity: 0.6 }}>
					{description.slice(0, 70)}
				</Typography>

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
