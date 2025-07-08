import { Box, Container, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import { colors } from '../../constants/colors'
import Category from '../category'
import Videos from '../videos'
import { ApiService } from '../service/api.service'

const Main = () => {
	const [selectedCategory, setSelectedCategory] = useState('New')
	const selectCategoryHandler = category => setSelectedCategory(category)
	const [videos, setVideos] = useState([])

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await ApiService.fetching(
					`search?q=${selectedCategory}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`
				)
				setVideos(data.items)
			} catch (error) {
				console.log(error)
			}
		}

		getData()
	}, [selectedCategory]) 

	return (
		<Stack>
			<Category
				selectedCategoryHandler={selectCategoryHandler}
				selectedCategory={selectedCategory}
			/>
			<Box p={3} sx={{ height: '90vh' }}>
				<Container
					maxWidth={false}
					disableGutters
					sx={{ width: '90%', mx: 'auto' }}
				>
					<Typography variant='h4' fontWeight='bold' mb={2}>
						{selectedCategory}{' '}
						<span style={{ color: colors.secondary }}>videos</span>
					</Typography>
					<Videos videos={videos} />
				</Container>
			</Box>
		</Stack>
	)
}

export default Main
