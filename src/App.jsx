import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Main from './components/main'
import Channel from './components/channel'
import Search from './components/search'
import Navbar from './components/navbar'

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
			</Routes>
		</Box>
	)
}

export default App
