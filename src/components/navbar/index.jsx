import { Box, Container, Stack } from '@mui/material'
import youTubeLogo from '../../assets/saved.png'
import { colors } from '../../constants/colors'
import { Link } from 'react-router-dom'
import SearchBar from '../search-bar'
const Navbar = () => {
	return (
		
		<Stack
			direction={'row'}
			alignItems={'center'}
			justifyContent={'space-between'}
			p={'3'}
			sx={{
				position: 'sticky',
				top: 0,
				zIndex: 999,
				background: colors.primary,
				
			}}
		>
			<Link to={'/'}>
				<img src={youTubeLogo} alt='Logo' height={45} width={70} />
			</Link>
			<SearchBar />
			<Box />
		</Stack>
		
	)
}

export default Navbar
