import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
	method: 'GET',
	params: {
		maxResults: '50',
	},
	headers: {
		'x-rapidapi-key': '33b27bf448mshd962c0f34e7460ep14a73fjsnb3c7a2630b52',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
	},
}

export const ApiService = {
	async fetching(url) {
		try {
			const response = await axios.get(`${BASE_URL}/${url}`, options)
			return response.data
		} catch (error) {
			console.error('❌ API xatolik:', error) // <-- Debug log
			return null
		}
	},
}
