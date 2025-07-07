import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiService } from '../service/api.service'
import { Box, Chip, Stack, Avatar, Typography } from '@mui/material'
import { Tag, Visibility, FavoriteOutlined, MarkChatRead, CheckCircle } from '@mui/icons-material'
import ReactPlayer from 'react-player'

const VideoDetail = () => {
	const [videoDetail, setVideoDetail] = useState(null)
	const { id } = useParams()

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await ApiService.fetching(
					`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`
				)
				setVideoDetail(data.items[0])
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
			<Box
				display={'flex'}
				sx={{ flexDirection: { xs: 'column', md: 'row' } }}
				width={{ xs: '100%', md: '75%' }}
			>
				<Box width={{ xs: '100%', md: '75%' }}>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${id}`}
						className='react-player'
						width='100%'
						height='400px'
						controls
					/>

					{/* Video Tags */}
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

					{/* Video Title */}
					<Typography variant='h5' fontWeight='bold' p={2}>
						{snippet.title}
					</Typography>

					{/* Video Description */}
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
						<Stack direction='row' alignItems='center' gap='5px' sx={{ opacity: 0.7 }}>
							<Visibility />
							{parseInt(statistics.viewCount).toLocaleString()} views
						</Stack>
						<Stack direction='row' alignItems='center' gap='5px' sx={{ opacity: 0.7 }}>
							<FavoriteOutlined />
							{parseInt(statistics.likeCount).toLocaleString()} likes
						</Stack>
						<Stack direction='row' alignItems='center' gap='5px' sx={{ opacity: 0.7 }}>
							<MarkChatRead />
							{parseInt(statistics.commentCount).toLocaleString()} comments
						</Stack>
					</Stack>
				</Box>

				{/* Channel Info */}
				<Box width={{ xs: '100%', md: '25%' }} mt={2} pl={2}>
					<Stack direction='row' alignItems='center' gap='10px'>
						<Avatar
							alt={snippet.channelTitle}
							src={snippet.thumbnails?.default?.url}
						/>
						<Typography variant='subtitle2' color='gray'>
							{snippet.channelTitle}
							<CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
						</Typography>
					</Stack>
				</Box>
			</Box>

			{/* Suggested Videos */}
			<Box width={'100%'} mt={4} px={2}>
				<Typography variant='h6' fontWeight='bold'>
					Suggested Videos
				</Typography>
				{/* You can map suggested videos here */}
			</Box>
		</Box>
	)
}

export default VideoDetail
