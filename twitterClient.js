"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function getAuthenticatedClient({ auth_token, ct0, bearerToken, }) {
    const requiredParams = {
        auth_token,
        ct0,
        bearerToken,
    };
    const missingParams = Object.keys(requiredParams).filter(key => !requiredParams[key]);
    if (missingParams.length) {
        throw new Error(`${missingParams.join(', ')} is required!`);
    }
    return axios_1.default.create({
        baseURL: 'https://x.com/i/api/2/',
        headers: {
            Authorization: `Bearer ${bearerToken}`,
            Cookie: `auth_token=${auth_token}; ct0=${ct0}`,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
            'X-Csrf-Token': ct0,
            'X-Twitter-Auth-Type': 'OAuth2Session',
        },
    });
}
exports.default = getAuthenticatedClient;
