import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
	method: 'GET',
	params: {
		maxResults: '50',
	},
	headers: {
		'x-rapidapi-key': '6d26ab6683msh7df7c286ce5c161p1ebca6jsnae764004dfac',
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
