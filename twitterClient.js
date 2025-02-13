"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function getAuthenticatedClient(auth_token, ct0, bearerToken) {
    if (!auth_token) {
        throw new Error('Auth token is required!');
    }
    return axios_1.default.create({
        baseURL: 'https://x.com/i/api/2/',
        headers: {
            Authorization: `Bearer ${bearerToken}`,
            Cookie: `auth_token=${auth_token}; ct0=${ct0}`,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
            'Accept-Language': 'en-US,en;q=0.9',
            Referer: 'https://twitter.com/',
            Origin: 'https://twitter.com',
            'X-Csrf-Token': ct0,
            'X-Twitter-Auth-Type': 'OAuth2Session',
            'X-Twitter-Client-Language': 'en',
        },
    });
}
exports.default = getAuthenticatedClient;
