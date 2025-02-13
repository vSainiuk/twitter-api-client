import axios from 'axios'

interface AuthenticatedClient {
	auth_token: string
	ct0: string
	bearerToken: string
}

function getAuthenticatedClient({
	auth_token,
	ct0,
	bearerToken,
}: AuthenticatedClient) {
	const requiredParams: Record<string, string> = {
		auth_token,
		ct0,
		bearerToken,
	}
	const missingParams = Object.keys(requiredParams).filter(
		key => !requiredParams[key]
	)

	if (missingParams.length) {
		throw new Error(`${missingParams.join(', ')} is required!`)
	}

	return axios.create({
		baseURL: 'https://x.com/i/api/2/',
		headers: {
			Authorization: `Bearer ${bearerToken}`,
			Cookie: `auth_token=${auth_token}; ct0=${ct0}`,
			'User-Agent':
				'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
			'X-Csrf-Token': ct0,
			'X-Twitter-Auth-Type': 'OAuth2Session',
		},
	})
}

export default getAuthenticatedClient
