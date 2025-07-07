import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
	method: 'GET',
	params: {
		maxResults: '50',
	},
	headers: {
		'x-rapidapi-key': '9398d173demsh0cb6e6f1cbbe429p10c388jsn42d2e035c7c',
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
