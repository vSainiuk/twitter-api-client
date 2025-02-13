import axios from 'axios'

function getAuthenticatedClient(
	auth_token: string,
	ct0: string,
	bearerToken: string
) {
	if (!auth_token) {
		throw new Error('Auth token is required!')
	}

	return axios.create({
		baseURL: 'https://x.com/i/api/2/',
		headers: {
			Authorization: `Bearer ${bearerToken}`,
			Cookie: `auth_token=${auth_token}; ct0=${ct0}`,
			'User-Agent':
				'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
			'Accept-Language': 'en-US,en;q=0.9',
			Referer: 'https://twitter.com/',
			Origin: 'https://twitter.com',
			'X-Csrf-Token': ct0,
			'X-Twitter-Auth-Type': 'OAuth2Session',
			'X-Twitter-Client-Language': 'en',
		},
	})
}

export default getAuthenticatedClient
