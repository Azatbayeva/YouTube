import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiService } from '../service/api.service'
import ChannelCard from '../chanel-card'
import Videos from '../videos'

const Channel = () => {
	const [channelDetail, setChannelDetail] = useState(null)
	const [videos, setVideos] = useState([])
	const { id } = useParams()

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await ApiService.fetching(
					`channels?part=snippet%2Cstatistics%2CbrandingSettings&id=${id}`
				)
				setChannelDetail(data.items[0])

				const dataVideo = await ApiService.fetching(
					`search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`
				)
				setVideos(dataVideo.items)
			} catch (err) {
				console.error(err)
			}
		}
		getData()
	}, [id])

	return (
		<Box minHeight='95vh' mt='10vh'>
			<Box>
				<Box
					width='100%'
					height='200px'
					zIndex={10}
					sx={{
						backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						objectFit: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				/>
				<ChannelCard video={channelDetail} marginTop={'-100px'} />
			</Box>
			<Videos videos={videos} />
		</Box>
	)
}

export default Channel
