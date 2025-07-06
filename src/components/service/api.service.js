import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
	method: 'GET',
	params: {
		maxResults: '50',
	},
		headers: {
		'x-rapidapi-key': '0d3e575114msha4eeca2f607ba5ap1ad4adjsnc69b2a1e99cc',
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
