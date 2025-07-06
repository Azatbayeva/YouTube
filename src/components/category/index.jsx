import { Stack } from '@mui/material'
import { categories } from '../../constants/categories'
import { colors } from '../../constants/colors'

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
	return (
		<Stack direction="row" sx={{ overflowX: 'scroll', p: 2 }}>
			{categories.map((item) => (
				<button
					key={item.name}
					className="category__btn"
					style={{
						borderRadius: 0,
						background: item.name === selectedCategory ? colors.secondary : 'transparent',
						color: item.name === selectedCategory ? 'white' : 'inherit',
					}}
					onClick={() => selectedCategoryHandler(item.name)}
				>
					<span
						style={{
							color: item.name === selectedCategory ? 'white' : colors.secondary,
							marginRight: '15px',
						}}
					>
						{item.icon}
					</span>
					<span style={{ opacity: '1' }}>{item.name}</span>
				</button>
			))}
		</Stack>
	)
}

export default Category
