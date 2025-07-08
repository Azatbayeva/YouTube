import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ApiService } from '../service/api.service'
import { Box, Chip, Stack, Avatar, Typography } from '@mui/material'
import {
	Tag,
	Visibility,
	FavoriteOutlined,
	MarkChatRead,
	CheckCircle,
} from '@mui/icons-material'
import ReactPlayer from 'react-player'
import Videos from '../videos' // related videos component

const VideoDetail = () => {
	const [videoDetail, setVideoDetail] = useState(null)
	const [relatedVideo, setRelatVideo] = useState([])
	const { id } = useParams()

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await ApiService.fetching(
					`videos?part=contentDetails,snippet,statistics&id=${id}`
				)
				setVideoDetail(data.items[0])

				const relatedData = await ApiService.fetching(
					`search?relatedToVideoId=${id}&part=snippet&type=video&maxResults=50`
				)
				setRelatVideo(relatedData.items)
			} catch (error) {
				console.error('Error fetching video data:', error)
			}
		}

		getData()
	}, [id])

	if (!videoDetail) return <Typography p={5}>Loading...</Typography>

	const { snippet, statistics } = videoDetail

	return (
		<Box minHeight='90vh' mb={10}>
			<Stack
				direction={{ xs: 'column', md: 'row' }}
				width={'100%'}
				justifyContent='center'
			>
				{/* Video Section */}
				<Box width={{ xs: '100%', md: '70%' }} px={2}>
					<ReactPlayer
						src={`https://www.youtube.com/watch?v=${id}`}
						className='react-player'
						width='100%'
						height='400px'
						controls
					/>

					{/* Tags */}
					<Box mt={2}>
						{snippet?.tags?.slice(0, 5).map((item, idx) => (
							<Chip
								label={item}
								key={idx}
								sx={{ mr: 1, mb: 1, cursor: 'pointer' }}
								variant='outlined'
								onDelete={() => {}}
								deleteIcon={<Tag />}
							/>
						))}
					</Box>

					{/* Title */}
					<Typography variant='h5' fontWeight='bold' p={2}>
						{snippet.title}
					</Typography>

					{/* Description */}
					<Typography
						variant='subtitle2'
						p={2}
						sx={{ opacity: 0.7 }}
						component='div'
						dangerouslySetInnerHTML={{
							__html: snippet.description,
						}}
					/>

					{/* Stats */}
					<Stack direction='row' alignItems='center' py={1} px={2} gap={4}>
						<Stack
							direction='row'
							alignItems='center'
							gap='5px'
							sx={{ opacity: 0.7 }}
						>
							<Visibility />
							{parseInt(statistics.viewCount).toLocaleString()} views
						</Stack>
						<Stack
							direction='row'
							alignItems='center'
							gap='5px'
							sx={{ opacity: 0.7 }}
						>
							<FavoriteOutlined />
							{parseInt(statistics.likeCount).toLocaleString()} likes
						</Stack>
						<Stack
							direction='row'
							alignItems='center'
							gap='5px'
							sx={{ opacity: 0.7 }}
						>
							<MarkChatRead />
							{parseInt(statistics.commentCount).toLocaleString()} comments
						</Stack>
					</Stack>

					{/* Channel Info */}
					<Link to={`/channel/${snippet?.channelId}`}>
						<Stack direction='row' alignItems='center' p={2} gap={2}>
							<Avatar
								alt={snippet.channelTitle}
								src={snippet.thumbnails?.default?.url}
							/>
							<Typography variant='subtitle2' color='gray'>
								{snippet.channelTitle}
								<CheckCircle
									sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
								/>
							</Typography>
						</Stack>
					</Link>
				</Box>

				{/* Suggested Videos Section */}
				<Box
					width={{ xs: '100%', md: '30%' }}
					px={2}
					py={2}
					sx={{ maxHeight: '85vh', overflowY: 'auto' }}
				>
					<Typography variant='h6' mb={2}>
						Related Videos
					</Typography>
					<Videos videos={relatedVideo} />
				</Box>
			</Stack>
		</Box>
	)
}

export default VideoDetail
