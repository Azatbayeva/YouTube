import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Main from './components/main'
import Channel from './components/channel'
import Search from './components/search'
import Navbar from './components/navbar'
import VideoDetail from './components/video-detail'

function App() {
	return (
		<Box>
			<Navbar />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/channel' element={<Channel />} />
				<Route path='/channel/:id' element={<Channel />} />
				<Route path='/search' element={<Search />} />
				<Route path='/search/:id' element={<Search />} />
				<Route path='/video' element={<VideoDetail />} />
				<Route path='/video/:id' element={<VideoDetail />} />
			</Routes>
		</Box>
	)
}

export default App
