import { Box, CircularProgress, Stack } from '@mui/material'

const Loader = () => {
	return (
		<Box minHeight="90vh">
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				height="100%"
			>
				<CircularProgress color="secondary" size={50} thickness={4.5} />
			</Stack>
		</Box>
	)
}

export default Loader
