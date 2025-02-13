import 'dotenv/config'
import getAuthenticatedClient from './twitterClient'

const auth_token = process.env.AUTH_TOKEN || ''
const ct0 = process.env.ct0 || ''
const bearerToken = process.env.bearerToken || ''

const ourEndpoint = 'badge_count/badge_count.json?supports_ntab_urt=1';

(async function run() {
	const client = getAuthenticatedClient({
		auth_token,
		ct0,
		bearerToken,
	})

	try {
		const response = await client.get(ourEndpoint)

		console.log('response', JSON.stringify(response.data))
	} catch (e) {
		if (e instanceof Error) {
			console.error('❌ Error:', e.message)
		}
		console.error('❌ Error:', e)
	}
})()
