import { Box, Container, Stack, Typography } from '@mui/material'
import { colors } from '../../constants/colors'
import Category from '../category'
import Videos from '../videos'
import { useEffect, useState } from 'react'
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
	}, [selectedCategory]) // <-- Kiritilgan o‘zgarish

	return (
		<Stack>
			<Category
				selectedCategoryHandler={selectCategoryHandler}
				selectedCategory={selectedCategory}
			/>
			<Box p={2} sx={{ height: '90vh' }}>
				<Container fixed sx={{ width: '90%'  }}>
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
