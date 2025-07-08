import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiService } from '../service/api.service'
import {
	Box,
	Container,
	Typography,
	CircularProgress,
	Grid,
	Card,
	CardMedia,
	CardContent,
} from '@mui/material'
import { colors } from '../../constants/colors'

const Search = () => {
	const [videos, setVideos] = useState([])
	const [loading, setLoading] = useState(true)
	const { id } = useParams()

	useEffect(() => {

		//working with Api
		const getData = async () => {
			try {
				setLoading(true)
				const data = await ApiService.fetching(
					`search?q=${id}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`
				)
				setVideos(data.items || [])
			} catch (error) {
				console.error(error)
			} finally {
				setLoading(false)
			}
		}

		getData()
	}, [id])

	return (
		<Box p={2} sx={{ minHeight: '90vh', backgroundColor: '#f9f9f9' }}>
			<Container maxWidth="lg">
				<Typography variant="h4" fontWeight="bold" mb={3}>
					Search results for{' '}
					<span style={{ color: colors.secondary }}>{id}</span>
				</Typography>

				{loading ? (
					<Box display="flex" justifyContent="center" alignItems="center" height="60vh">
						<CircularProgress color="secondary" />
					</Box>
				) : videos.length === 0 ? (
					<Typography variant="h6" color="text.secondary">
						No videos found.
					</Typography>
				) : (
					<Grid container spacing={3}>
						{videos.map((video) => (
							<Grid
								item
								xs={12}
								sm={6}
								md={4}
								lg={3}
								key={video.id.videoId || video.id.channelId}
							>
								<Card sx={{ height: '100%', borderRadius: 3, boxShadow: 3 }}>
									<CardMedia
										component="img"
										height="180"
										image={video.snippet?.thumbnails?.high?.url}
										alt={video.snippet?.title}
									/>
									<CardContent>
										<Typography variant="subtitle1" fontWeight="bold" gutterBottom>
											{video.snippet?.title.slice(0, 50)}...
										</Typography>
										<Typography variant="body2" color="text.secondary">
											{video.snippet?.channelTitle}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				)}
			</Container>
		</Box>
	)
}

export default Search
